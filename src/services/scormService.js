// SCORM Service Simplificado - Versão que funciona
let scormAPI = null;
let isInitialized = false;
let sessionStartTime = null;
let sessionInterval = null;

// Tenta encontrar a API SCORM
function findScormAPI() {
  let api = null;
  let win = window;
  let attempts = 0;
  const maxAttempts = 500;

  while (!api && win.parent && win.parent !== win && attempts < maxAttempts) {
    attempts++;
    if (win.API) {
      api = win.API;
      break;
    }
    win = win.parent;
  }

  return api;
}

// Converte milissegundos para formato SCORM (HH:MM:SS)
function msToScormTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}

const scormService = {
  // Inicialização
  async initialize() {
    try {
      scormAPI = findScormAPI();

      if (scormAPI) {
        const result = scormAPI.LMSInitialize("");
        isInitialized = result === "true";

        // Se inicializou, define status inicial
        if (isInitialized) {
          const status = this.get("cmi.core.lesson_status");
          if (!status || status === "not attempted") {
            this.set("cmi.core.lesson_status", "incomplete");
            this.commit();
          }

          // Inicia rastreamento de tempo
          this.startSessionTimer();
        }
      } else {
        isInitialized = false;
      }

      return isInitialized;
    } catch (error) {
      return false;
    }
  },

  // Finalização
  terminate() {
    if (scormAPI && isInitialized) {
      // Para o timer e salva tempo final
      this.stopSessionTimer();

      const result = scormAPI.LMSFinish("");
      isInitialized = false;
      return result === "true";
    }
    return true;
  },

  // Inicia o timer da sessão
  startSessionTimer() {
    if (sessionInterval) return; // Já está rodando

    sessionStartTime = Date.now();

    // Atualiza o tempo a cada 30 segundos
    sessionInterval = setInterval(() => {
      this.updateSessionTime();
    }, 30000);
  },

  // Para o timer e salva tempo final
  stopSessionTimer() {
    if (sessionInterval) {
      clearInterval(sessionInterval);
      sessionInterval = null;
    }
    this.updateSessionTime(); // Salva tempo final
  },

  // Atualiza o tempo de sessão no SCORM
  updateSessionTime() {
    if (!sessionStartTime) return;

    const elapsed = Date.now() - sessionStartTime;
    const scormTime = msToScormTime(elapsed);

    this.set("cmi.core.session_time", scormTime);
    this.commit();
  },

  // Definir valor
  set(element, value) {
    if (scormAPI && isInitialized) {
      try {
        const result = scormAPI.LMSSetValue(element, value);
        return result === "true";
      } catch (error) {
        return false;
      }
    }
    // Modo desenvolvimento - simula sucesso
    return true;
  },

  // Obter valor
  get(element) {
    if (scormAPI && isInitialized) {
      try {
        return scormAPI.LMSGetValue(element) || this.getDefaultValue(element);
      } catch (error) {
        return this.getDefaultValue(element);
      }
    }
    // Modo desenvolvimento - retorna valores padrão
    return this.getDefaultValue(element);
  },

  // Commit
  commit() {
    if (scormAPI && isInitialized) {
      try {
        const result = scormAPI.LMSCommit("");
        return result === "true";
      } catch (error) {
        return false;
      }
    }
    return true;
  },

  // Valores padrão para desenvolvimento
  getDefaultValue(element) {
    const defaults = {
      "cmi.core.student_name": "Usuário Teste",
      "cmi.core.lesson_status": "incomplete",
      "cmi.core.score.raw": "0",
      "cmi.core.score.min": "0",
      "cmi.core.score.max": "100",
      "cmi.suspend_data": "",
      "cmi.core.lesson_location": "",
      "cmi.core.session_time": "00:00:00",
    };
    return defaults[element] || "";
  },

  // Métodos de conveniência
  setLessonStatus(status) {
    return this.set("cmi.core.lesson_status", status);
  },

  getLessonStatus() {
    return this.get("cmi.core.lesson_status");
  },

  setScore(raw, min = 0, max = 100) {
    let success = true;
    success = success && this.set("cmi.core.score.raw", raw.toString());
    success = success && this.set("cmi.core.score.min", min.toString());
    success = success && this.set("cmi.core.score.max", max.toString());
    return success;
  },

  getScore() {
    return parseFloat(this.get("cmi.core.score.raw")) || 0;
  },

  setSuspendData(data) {
    const jsonData = typeof data === "string" ? data : JSON.stringify(data);
    return this.set("cmi.suspend_data", jsonData);
  },

  getSuspendData() {
    const data = this.get("cmi.suspend_data");
    if (!data) return null;

    try {
      return JSON.parse(data);
    } catch (error) {
      return data;
    }
  },

  getStudentName() {
    return this.get("cmi.core.student_name");
  },

  // Finalização do curso
  completeCourse(finalScore = null) {
    if (finalScore !== null) {
      this.setScore(finalScore);
    }
    this.setLessonStatus("completed");
    return this.commit();
  },

  passCourse(finalScore = null) {
    if (finalScore !== null) {
      this.setScore(finalScore);
    }
    this.setLessonStatus("passed");
    return this.commit();
  },

  failCourse(finalScore = null) {
    if (finalScore !== null) {
      this.setScore(finalScore);
    }
    this.setLessonStatus("failed");
    return this.commit();
  },

  // Status
  get isInitialized() {
    return isInitialized;
  },
};

export default scormService;
