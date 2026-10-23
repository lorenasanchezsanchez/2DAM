# ¿Qué son Gradle y Maven?

**Gradle y Maven son herramientas que permiten construir aplicaciones y gestionar las bibliotecas que necesitan.**

Se utilizan, por ejemplo, en proyectos desarrollados con Java, Kotlin y Android.

---

## 1. ¿Qué es Gradle?

**Gradle es una herramienta que automatiza la construcción de un programa.**

Cuando desarrollamos una aplicación, necesitamos realizar diferentes tareas:

* Descargar las bibliotecas que utiliza el proyecto.
* Compilar el código fuente.
* Comprobar que no hay errores de compilación.
* Ejecutar pruebas.
* Generar el archivo necesario para instalar la aplicación.

Gradle automatiza estas tareas para que no tengamos que realizarlas manualmente.

### Ejemplo

Cuando desarrollamos una aplicación Android con Kotlin y pulsamos el botón `Run ▶️` de Android Studio, Gradle participa en la construcción de la aplicación.

Su configuración suele encontrarse en archivos como:

* `build.gradle`
* `build.gradle.kts`

La extensión `.kts` indica que el archivo utiliza Kotlin DSL para definir la configuración de Gradle.

---

## 2. ¿Qué es Maven?

**Maven es otra herramienta que permite construir proyectos y gestionar sus dependencias.**

Se utiliza especialmente en proyectos Java y en aplicaciones de servidor.

Maven permite:

* Descargar las bibliotecas que necesita el proyecto.
* Gestionar las dependencias.
* Compilar el código.
* Ejecutar pruebas.
* Empaquetar la aplicación.

Su archivo de configuración principal es:

`pom.xml`

### Ejemplo

Si una aplicación Java necesita una biblioteca para conectarse a una base de datos, podemos declararla en el archivo `pom.xml` para que Maven gestione esa dependencia.

---

## 3. Diferencias entre Gradle y Maven

| Característica           | Gradle                                                       | Maven                                                              |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------ |
| ¿Qué es?                 | Herramienta de construcción.                                 | Herramienta de construcción.                                       |
| ¿Qué permite?            | Compilar, probar y empaquetar programas, entre otras tareas. | Compilar, probar y empaquetar programas, entre otras tareas.       |
| Archivo de configuración | `build.gradle` o `build.gradle.kts`                          | `pom.xml`                                                          |
| Formato de configuración | Groovy o Kotlin DSL.                                         | XML.                                                               |
| Uso en Android           | Herramienta habitual para construir aplicaciones Android.    | No es la herramienta estándar para construir aplicaciones Android. |
| Uso en Java              | Muy utilizado.                                               | Muy utilizado.                                                     |

Aunque ambas herramientas tienen funcionalidades similares, utilizan sistemas de configuración diferentes.

Gradle ofrece una configuración muy flexible y programable, mientras que Maven se basa en una estructura más convencional y en un conjunto de convenciones predefinidas.

---

## 4. ¿Qué son las dependencias?

Las **dependencias** son bibliotecas o componentes desarrollados por terceros que nuestro programa necesita para funcionar.

Por ejemplo, en lugar de programar desde cero una funcionalidad para trabajar con fechas, podemos utilizar una biblioteca que ya la implemente.

Tanto Gradle como Maven pueden descargar y gestionar estas bibliotecas.

### ¿Qué es un repositorio?

Un repositorio es un almacén donde se publican y distribuyen bibliotecas y paquetes de software.

Algunos ejemplos son:

* **Maven Central:** repositorio público que contiene numerosas bibliotecas Java y de otros ecosistemas.
* **Google Maven Repository:** repositorio de Google que contiene bibliotecas utilizadas habitualmente en Android.

Gradle y Maven pueden utilizar repositorios para descargar las dependencias de un proyecto.

> **Importante:** Maven Central es un repositorio, mientras que Maven es una herramienta de construcción. No son lo mismo.

---

## 5. ¿Qué es Gradle Wrapper?

El **Gradle Wrapper** permite que un proyecto utilice una versión concreta de Gradle sin depender de la versión que cada desarrollador tenga instalada globalmente.

Normalmente, incluye los siguientes archivos:

```text
gradlew
gradlew.bat
gradle/
└── wrapper/
    ├── gradle-wrapper.jar
    └── gradle-wrapper.properties
```

En Windows podemos utilizar el archivo `gradlew.bat` para ejecutar la versión de Gradle configurada para el proyecto.

Por ejemplo:

```powershell
.\gradlew.bat build
```

Este comando solicita a Gradle que construya el proyecto.

Si la versión necesaria no está descargada, el Wrapper puede descargarla automáticamente, siempre que tenga acceso a Internet.

### No debemos confundir estos conceptos

* **Gradle:** herramienta que automatiza la construcción del proyecto.
* **Gradle Wrapper:** mecanismo que permite utilizar la versión de Gradle definida para el proyecto.
* **Android Gradle Plugin (AGP):** complemento que proporciona las funcionalidades específicas necesarias para construir aplicaciones Android.

---

## 6. ¿Qué utilizamos en una aplicación Android?

En una aplicación Android desarrollada con Kotlin podemos encontrar los siguientes componentes:

| Componente            | Función                                                                   |
| --------------------- | ------------------------------------------------------------------------- |
| Kotlin                | Lenguaje utilizado para programar la lógica de la aplicación.             |
| XML                   | Formato utilizado, entre otras cosas, para definir interfaces y recursos. |
| Android SDK           | Proporciona herramientas y API para desarrollar aplicaciones Android.     |
| Gradle                | Automatiza la construcción del proyecto y gestiona las dependencias.      |
| Android Gradle Plugin | Integra las tareas específicas de construcción de Android.                |
| Gradle Wrapper        | Permite utilizar la versión de Gradle prevista para el proyecto.          |
| Repositorios          | Almacenan las bibliotecas que necesita la aplicación.                     |
| APK                   | Formato de paquete que permite instalar la aplicación en Android.         |

En un proyecto Android estándar no necesitamos instalar Maven para construir la aplicación: Gradle se encarga de este proceso.

---

## 7. Una analogía para entenderlo mejor

Imaginemos que estamos preparando una receta:

* **Kotlin** es el lenguaje con el que escribimos las instrucciones.
* **Las dependencias** son los ingredientes que necesitamos.
* **Los repositorios** son los lugares donde conseguimos esos ingredientes.
* **Gradle o Maven** son las herramientas que organizan y automatizan el proceso de preparación.
* **El APK** es el resultado final que podemos instalar en un dispositivo Android.

---

## 8. Conclusión

Gradle y Maven son herramientas de construcción que automatizan tareas como la compilación, la gestión de dependencias, las pruebas y el empaquetado.

La diferencia fundamental es que utilizan sistemas de configuración distintos:

* Gradle utiliza archivos como `build.gradle` y `build.gradle.kts`.
* Maven utiliza principalmente el archivo `pom.xml`.

**Para desarrollar aplicaciones Android con Kotlin, Gradle es la herramienta habitual de construcción.**
