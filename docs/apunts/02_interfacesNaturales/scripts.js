"use strict";
  window.addEventListener("DOMContentLoaded",
  function(event) {
    savepage_ShadowLoader(5);
  },false);
  function savepage_ShadowLoader(c){createShadowDOMs(0,document.documentElement);function createShadowDOMs(a,b){var i;if(b.localName=="iframe"||b.localName=="frame"){if(a<c){try{if(b.contentDocument.documentElement!=null){createShadowDOMs(a+1,b.contentDocument.documentElement)}}catch(e){}}}else{if(b.children.length>=1&&b.children[0].localName=="template"&&b.children[0].hasAttribute("data-savepage-shadowroot")){b.attachShadow({mode:"open"}).appendChild(b.children[0].content);b.removeChild(b.children[0]);for(i=0;i<b.shadowRoot.children.length;i++)if(b.shadowRoot.children[i]!=null)createShadowDOMs(a,b.shadowRoot.children[i])}for(i=0;i<b.children.length;i++)if(b.children[i]!=null)createShadowDOMs(a,b.children[i])}}}

/* Script extraído del HTML original */

(() => {
      const quiz = document.querySelector('[data-autoevaluacion="true"]');
      if (!quiz) {
        console.error("No se encontró la autoevaluación.");
        return;
      }

      const questions = Array.from(quiz.querySelectorAll("ol > li"));
      const correctAnswers = [3, 0, 2, 2, 3, 0, 3, 0, 2, 3];
      const explanations = [
        "Una NUI permite interactuar mediante acciones humanas habituales, como hablar o gesticular.",
        "El reconocedor convierte el audio en texto; la aplicación interpreta ese texto y decide qué acción realizar.",
        "El entrenamiento ajusta el modelo con ejemplos; la inferencia aplica ese modelo a datos nuevos.",
        "Separar a las personas evita que el modelo vea en la prueba usuarios que ya aparecían en el entrenamiento.",
        "Los puntos clave describen la pose y reducen la dependencia del fondo, la iluminación y el color de piel.",
        "Un deslizamiento rápido es un fling; un arrastre mantiene el contacto y suele ser más lento.",
        "La realidad aumentada añade elementos digitales al entorno real; la realidad virtual lo sustituye.",
        "Pedir confirmación evita que una orden mal reconocida borre datos accidentalmente.",
        "Solicitar el permiso al usar la función explica su necesidad y evita pedir acceso antes de tiempo.",
        "Varias predicciones seguidas reducen falsos positivos causados por una detección aislada."
      ];
      const summary = quiz.querySelector("h3 + span");
      const answers = Array(questions.length).fill(null);

      if (questions.length !== correctAnswers.length || !summary) {
        console.error("La autoevaluación no tiene la estructura esperada.");
        return;
      }

      summary.setAttribute("aria-live", "polite");
      questions.forEach((question, questionIndex) => {
        const group = question.querySelector('[role="group"]');
        const buttons = group ? Array.from(group.querySelectorAll("button")) : [];
        if (buttons.length !== 4) {
          console.error(`La pregunta ${questionIndex + 1} no tiene cuatro respuestas.`);
          return;
        }

        const feedback = document.createElement("p");
        feedback.className = "mt-3 text-sm text-muted-foreground";
        feedback.setAttribute("aria-live", "polite");
        feedback.hidden = true;
        group.insertAdjacentElement("afterend", feedback);
      });

      quiz.addEventListener("click", (event) => {
        const button = event.target.closest('[role="group"] > button');
        if (!button || !quiz.contains(button)) return;

        const question = button.closest("li");
        const questionIndex = questions.indexOf(question);
        const group = button.parentElement;
        const buttons = Array.from(group.querySelectorAll("button"));
        const selectedIndex = buttons.indexOf(button);
        if (questionIndex < 0 || selectedIndex < 0) return;

        answers[questionIndex] = selectedIndex;
        const correctIndex = correctAnswers[questionIndex];
        const correct = selectedIndex === correctIndex;
        buttons.forEach((option, optionIndex) => {
          const selected = optionIndex === selectedIndex;
          option.setAttribute("aria-pressed", String(selected));
          option.style.borderColor = selected
            ? correct ? "hsl(142 71% 40%)" : "hsl(0 72% 50%)"
            : "";
          option.style.backgroundColor = selected
            ? correct ? "hsl(142 71% 40% / 0.12)" : "hsl(0 72% 50% / 0.12)"
            : "";
        });

        const feedback = group.nextElementSibling;
        feedback.style.color = correct ? "hsl(142 71% 35%)" : "hsl(0 72% 45%)";
        feedback.textContent = correct
          ? `¡Correcto! ${explanations[questionIndex]}`
          : `No es correcto. La respuesta correcta es «${buttons[correctIndex].innerText.trim()}». ${explanations[questionIndex]}`;
        feedback.hidden = false;

        const answered = answers.filter((answer) => answer !== null).length;
        const score = answers.reduce(
          (total, answer, index) => total + Number(answer === correctAnswers[index]),
          0
        );
        summary.textContent = `${answered}/${questions.length} respondidas · ${score} aciertos`;
        if (answered === questions.length) {
          summary.textContent += score >= 8 ? " · Autoevaluación superada" : " · Aún no superada";
        }
      });
    })();

/* Script extraído del HTML original */

(() => {
      const editors = Array.from(
        document.querySelectorAll('[contenteditable="true"][aria-label="Editor de código"]')
      );
      const normalize = (text) => text.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9: ]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      const formatNumber = (number, digits = 0) => number.toFixed(digits);

      function runVoiceCommands(input) {
        return input.split(/\r?\n/).filter((line) => line.trim()).map((line) => {
          const text = normalize(line);
          let match = text.match(/(?:pon|poner|pone|programa)\s+(?:una\s+)?alarma\s+a\s+(?:las\s+)?(\d{1,2})(?::(\d{1,2})|( y media| y cuarto))?/);
          if (match) {
            const hour = Number(match[1]);
            const minutes = match[2] ? Number(match[2]) : match[3] === " y media" ? 30 : match[3] === " y cuarto" ? 15 : 0;
            if (hour > 23 || minutes > 59) return "ERROR: hora no válida";
            return `ALARMA ${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
          }

          match = text.match(/llama(?:r)?\s+a\s+(.+)/);
          if (match) {
            const name = match[1].split(" ").map((part) => part ? part[0].toUpperCase() + part.slice(1) : "").join(" ");
            return `LLAMAR ${name}`;
          }

          match = text.match(/(sube|baja)\s+(?:el\s+)?volumen(?:\s+(\d+))?/);
          if (match) return `VOLUMEN ${match[1] === "sube" ? "+" : "-"}${match[2] || "10"}`;

          match = text.match(/(?:abre|abrir|inicia)\s+(?:(?:la\s+)?(?:app|aplicacion)\s+)?(.+)/);
          if (match) return `ABRIR ${match[1].replace(/\s+por favor$/, "")}`;

          return `NO ENTENDIDO: ${line.trim()}`;
        }).join("\n");
      }

      function runTouchGestures(input) {
        return input.trim().split(/\r?\n\s*\r?\n/).filter((block) => block.trim()).map((block, index) => {
          const points = block.trim().split(/\r?\n/).map((line) => line.trim().split(/\s+/).map(Number));
          if (points.some((point) => point.length !== 3 || point.some((value) => !Number.isFinite(value)))) {
            throw new Error(`El gesto ${index + 1} debe contener líneas «tiempo x y».`);
          }
          const first = points[0];
          const last = points[points.length - 1];
          const dx = last[1] - first[1];
          const dy = last[2] - first[2];
          const duration = last[0] - first[0];
          if (duration <= 0) throw new Error(`La duración del gesto ${index + 1} debe ser mayor que cero.`);
          const distance = Math.hypot(dx, dy);
          const speed = distance / duration;
          let type;
          if (distance < 10) {
            type = duration < 300 ? "TOQUE" : duration >= 500 ? "PULSACIÓN LARGA" : "INDECISO";
          } else if (distance >= 50 && speed >= 0.3) {
            type = Math.abs(dx) >= Math.abs(dy)
              ? `DESLIZAR ${dx >= 0 ? "DERECHA" : "IZQUIERDA"}`
              : `DESLIZAR ${dy >= 0 ? "ABAJO" : "ARRIBA"}`;
          } else {
            type = "ARRASTRE";
          }
          return `Gesto ${index + 1}: ${type} (${formatNumber(distance)} px en ${formatNumber(duration)} ms, ${formatNumber(speed, 2)} px/ms)`;
        }).join("\n");
      }

      function runHandGestures(input) {
        const fingers = ["pulgar", "indice", "corazon", "anular", "menique"];
        return input.trim().split(/\r?\n\s*---\s*\r?\n/).filter((block) => block.trim()).map((block, index) => {
          const points = new Map();
          block.trim().split(/\r?\n/).forEach((line) => {
            const [name, x, y] = line.trim().split(/\s+/);
            if (!name || !Number.isFinite(Number(x)) || !Number.isFinite(Number(y))) {
              throw new Error(`La mano ${index + 1} contiene un punto no válido.`);
            }
            points.set(name, [Number(x), Number(y)]);
          });
          const wrist = points.get("muneca");
          if (!wrist) throw new Error(`Falta el punto muneca en la mano ${index + 1}.`);
          const distance = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
          const extended = fingers.filter((finger) => {
            const middle = points.get(`${finger}_medio`);
            const tip = points.get(`${finger}_punta`);
            if (!middle || !tip) throw new Error(`Faltan puntos del dedo ${finger} en la mano ${index + 1}.`);
            return distance(wrist, tip) > distance(wrist, middle) * (finger === "pulgar" ? 1.1 : 1.15);
          });
          const thumbTip = points.get("pulgar_punta");
          const indexTip = points.get("indice_punta");
          const indexMiddle = points.get("indice_medio");
          const pinch = distance(thumbTip, indexTip) < 0.25 * distance(wrist, indexMiddle);
          let gesture;
          if (pinch) gesture = "PINZA";
          else if (!extended.length) gesture = "PUÑO";
          else if (extended.length === 5) gesture = "MANO ABIERTA";
          else if (extended.length === 1 && extended[0] === "pulgar") gesture = "PULGAR";
          else if (extended.length === 2 && extended.includes("indice") && extended.includes("corazon")) gesture = "VICTORIA";
          else if (extended.length === 1 && extended[0] === "indice") gesture = "SEÑALAR";
          else gesture = "DESCONOCIDO";
          return `Mano ${index + 1}: ${gesture} (extendidos: ${extended.length ? extended.join(", ") : "ninguno"})`;
        }).join("\n");
      }

      const definitions = [
        {
          match: "Un intérprete de órdenes de voz",
          run: runVoiceCommands,
          hints: [
            "Normaliza cada frase antes de buscar patrones, pero conserva el texto original para «NO ENTENDIDO».",
            "Reconoce alarma antes que llamada, volumen y aplicación; valida la hora y completa dos cifras.",
            "Para los nombres, convierte a mayúscula la inicial de cada palabra. El volumen por defecto es 10."
          ]
        },
        {
          match: "Clasificar gestos táctiles",
          run: runTouchGestures,
          hints: [
            "Separa los gestos por líneas en blanco y compara el primer punto con el último.",
            "Calcula distancia con Math.hypot(dx, dy), duración y velocidad en píxeles por milisegundo.",
            "Aplica primero el umbral de toque (<10 px); para deslizamientos exige distancia ≥50 y velocidad ≥0.3."
          ]
        },
        {
          match: "¿Qué gesto hace la mano?",
          run: runHandGestures,
          hints: [
            "Divide las manos por «---» y guarda cada punto por su nombre.",
            "Compara la distancia de cada punta a muneca con la de su articulación media y el umbral del dedo.",
            "Comprueba PINZA antes de clasificar puño, mano abierta, pulgar, victoria o señalar."
          ]
        }
      ];

      editors.forEach((editor, index) => {
        const definition = definitions.find((item) => editor.closest(".rounded-xl")?.innerText.includes(item.match));
        const card = editor.closest(".rounded-xl");
        if (!definition || !card) {
          console.error("No se pudo inicializar un reto de programación.");
          return;
        }

        const originalCode = editor.innerHTML;
        const toolbar = card.querySelector("button")?.parentElement;
        const controls = toolbar ? Array.from(toolbar.querySelectorAll("button")) : [];
        const [runButton, resetButton, hintButton, solutionButton] = controls;
        const tabs = Array.from(card.querySelectorAll('[role="tab"]'));
        const testPanel = card.querySelector('[role="tabpanel"]');
        const outputPanel = card.querySelectorAll('[role="tabpanel"]')[1];
        const inputPre = card.querySelector('pre[aria-label^="Entrada"]');
        const expectedPre = card.querySelector('pre[aria-label="Salida esperada"]');
        const inputBox = document.createElement("textarea");
        const inputLabel = document.createElement("label");
        const notice = document.createElement("p");
        const output = document.createElement("pre");
        const solution = document.createElement("p");
        const status = document.createElement("p");
        const initialInput = inputPre?.textContent || "";
        const initialExpected = expectedPre?.textContent.trim() || "";
        let attemptCount = 0;
        let hintIndex = 0;

        if (!runButton || !resetButton || !hintButton || !solutionButton || !testPanel || !outputPanel || !inputPre || !expectedPre) {
          console.error(`El reto ${index + 1} no contiene todos los controles esperados.`);
          return;
        }

        editor.contentEditable = "false";
        editor.setAttribute("aria-label", "Código Java de referencia (no se compila en modo local)");
        notice.className = "m-3 rounded-lg border border-primary/30 bg-primary/5 px-3 py-2 text-xs text-muted-foreground";
        notice.textContent = "Simulador local: Ejecutar procesa la entrada con una implementación de referencia en JavaScript; el editor Java se conserva como guía y no se compila.";
        editor.closest(".cm-theme")?.insertAdjacentElement("beforebegin", notice);

        inputLabel.className = "block mt-3 mb-1 text-xs font-semibold text-foreground";
        inputLabel.textContent = "Entrada del reto (editable)";
        inputBox.className = "w-full min-h-28 rounded-lg border border-border bg-background px-3 py-2 font-mono text-xs text-foreground";
        inputBox.setAttribute("aria-label", "Entrada del reto");
        inputBox.spellcheck = false;
        inputBox.value = initialInput;
        inputPre.insertAdjacentElement("afterend", inputLabel);
        inputLabel.insertAdjacentElement("afterend", inputBox);

        output.className = "m-3 min-h-20 whitespace-pre-wrap rounded-lg border border-border bg-background/60 p-3 font-mono text-xs text-foreground";
        output.setAttribute("aria-label", "Salida de ejecución");
        status.className = "mx-3 mb-3 text-sm text-muted-foreground";
        status.setAttribute("aria-live", "polite");
        solution.className = "mx-3 mb-3 max-h-64 overflow-auto rounded-lg border border-primary/30 bg-primary/5 p-3 font-mono text-xs text-foreground whitespace-pre-wrap";
        solution.hidden = true;
        outputPanel.replaceChildren(output, status, solution);

        const testInputs = initialInput.trim().split(/\r?\n\s*---\s*\r?\n/);
        const expectedLines = initialExpected.split(/\r?\n/);
        const testCases = index === 0 ? [
          { name: "Ejemplo del reto", input: initialInput, expected: initialExpected },
          { name: "Hora no válida", input: "Pon una alarma a las 25:00\nAbre Spotify", expected: "ERROR: hora no válida\nABRIR spotify" },
          { name: "Volumen y nombre", input: "Baja el volumen 20\nLlama a Ana López", expected: "VOLUMEN -20\nLLAMAR Ana Lopez" }
        ] : index === 1 ? [
          { name: "Ejemplo del reto", input: initialInput, expected: initialExpected },
          { name: "Deslizamiento vertical", input: "0 0 0\n200 0 100", expected: "Gesto 1: DESLIZAR ABAJO (100 px en 200 ms, 0.50 px/ms)" },
          { name: "Movimiento corto y lento", input: "0 0 0\n400 3 4", expected: "Gesto 1: INDECISO (5 px en 400 ms, 0.01 px/ms)" }
        ] : [
          { name: "Ejemplo del reto", input: initialInput, expected: initialExpected },
          { name: "Puño", input: testInputs[0], expected: expectedLines[0] },
          { name: "Mano abierta", input: testInputs[1], expected: expectedLines[1].replace(/^Mano 2:/, "Mano 1:") }
        ];
        const completedTests = new Set();
        const testSummary = document.createElement("p");
        const testResults = document.createElement("div");
        const runAllTests = document.createElement("button");
        testPanel.replaceChildren();
        testSummary.className = "mb-3 text-xs text-muted-foreground";
        testSummary.textContent = `0/${testCases.length} pruebas superadas · ejecutan la lógica de referencia`;
        runAllTests.type = "button";
        runAllTests.className = "mb-3 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground";
        runAllTests.textContent = "Ejecutar todas las pruebas";
        testResults.className = "space-y-2";
        testPanel.append(testSummary, runAllTests, testResults);

        function selectTab(tabIndex) {
          tabs.forEach((tab, currentIndex) => {
            const selected = currentIndex === tabIndex;
            tab.setAttribute("aria-selected", String(selected));
            tab.tabIndex = selected ? 0 : -1;
          });
          testPanel.hidden = tabIndex !== 0;
          outputPanel.hidden = tabIndex !== 1;
        }

        function run(input) {
          try {
            const result = definition.run(input);
            output.textContent = result || "(sin salida)";
            status.textContent = "Ejecución completada con la lógica de referencia.";
            status.className = "mx-3 mb-3 text-sm text-green-700";
            solution.hidden = true;
            selectTab(1);
            attemptCount++;
            solutionButton.disabled = attemptCount < 2;
            solutionButton.title = solutionButton.disabled ? "Ejecuta el reto dos veces para mostrar la explicación" : "";
            return result;
          } catch (error) {
            output.textContent = "";
            status.textContent = error instanceof Error ? error.message : "No se pudo procesar la entrada.";
            status.className = "mx-3 mb-3 text-sm text-red-600";
            selectTab(1);
            attemptCount++;
            solutionButton.disabled = attemptCount < 2;
            return "";
          }
        }

        function runTest(test, testIndex) {
          const actual = definition.run(test.input).trim();
          const passed = actual === test.expected.trim();
          completedTests.add(testIndex);
          const result = testResults.querySelector(`[data-test-result="${testIndex}"]`);
          result.textContent = `${passed ? "✓ Superada" : "✗ No superada"}\nEsperada:\n${test.expected}\nObtenida:\n${actual}`;
          result.className = `mt-2 whitespace-pre-wrap rounded-md p-2 text-xs ${passed ? "bg-green-500/10 text-green-700" : "bg-red-500/10 text-red-600"}`;
          const passedCount = Array.from(completedTests).filter((completedIndex) => {
            const outputText = testResults.querySelector(`[data-test-result="${completedIndex}"]`)?.textContent || "";
            return outputText.startsWith("✓");
          }).length;
          testSummary.textContent = `${passedCount}/${testCases.length} pruebas superadas · lógica de referencia`;
        }

        testCases.forEach((test, testIndex) => {
          const item = document.createElement("div");
          item.className = "rounded-lg border border-border p-3";
          const button = document.createElement("button");
          const result = document.createElement("pre");
          button.type = "button";
          button.className = "text-left text-sm font-medium text-foreground hover:text-primary";
          button.textContent = `Probar: ${test.name}`;
          result.dataset.testResult = String(testIndex);
          result.className = "mt-2 whitespace-pre-wrap text-xs text-muted-foreground";
          item.append(button, result);
          testResults.append(item);
          button.addEventListener("click", () => {
            runTest(test, testIndex);
          });
        });

        runButton.addEventListener("click", () => {
          run(inputBox.value);
        });
        resetButton.addEventListener("click", () => {
          inputBox.value = initialInput;
          editor.innerHTML = originalCode;
          output.textContent = "";
          status.textContent = "Entrada y código de referencia restablecidos.";
          status.className = "mx-3 mb-3 text-sm text-muted-foreground";
          solution.hidden = true;
          attemptCount = 0;
          hintIndex = 0;
          hintButton.textContent = "Pista 1/3";
          solutionButton.disabled = true;
          solutionButton.title = "Inténtalo antes de mirar la solución";
          completedTests.clear();
          testSummary.textContent = `0/${testCases.length} pruebas superadas · ejecutan la lógica de referencia`;
          testCases.forEach((_, testIndex) => {
            const result = testResults.querySelector(`[data-test-result="${testIndex}"]`);
            result.textContent = "";
            result.className = "mt-2 whitespace-pre-wrap text-xs text-muted-foreground";
          });
          selectTab(0);
        });
        hintButton.addEventListener("click", () => {
          status.textContent = definition.hints[hintIndex];
          status.className = "mx-3 mb-3 text-sm text-muted-foreground";
          hintIndex = (hintIndex + 1) % definition.hints.length;
          hintButton.textContent = `Pista ${hintIndex + 1}/3`;
          selectTab(1);
        });
        solutionButton.addEventListener("click", () => {
          if (solutionButton.disabled) return;
          solution.textContent = `Solución de referencia (JavaScript):\n${definition.run.toString()}`;
          solution.hidden = false;
          selectTab(1);
        });
        tabs.forEach((tab, tabIndex) => {
          tab.addEventListener("click", () => selectTab(tabIndex));
        });
        runAllTests.addEventListener("click", () => {
          testCases.forEach(runTest);
        });
        selectTab(0);
      });
    })();
