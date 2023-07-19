# Awesomic Sivi

## Backlog

1. Crear Lista de tareas - [mariagomezt]

    - Crear Backlog
    - Estimar tiempos
    - Definir

creame un diagrama de gantt en mermaid con la siguiente lista de tareas. la fecha de inicio es el 12-jul de 2023, la de fin el 20-jul-2023 a las 12:00. El horario de trabjo es de 9:00 a 14:00. El 13-jul y el 20 jul ademas se necesitan 2 horas para tareas administrativas

2. Configuración inicial del proyecto
    - √ Crear y configurar el repositorio en GitHub. [elMestre]
    - √ Elegir y configurar el marco de trabajo para el desarrollo del sitio
        - √ HTML [agusspoxe] [johanZrEND] [josedavidd]
        - √ Vainilla JS [javiercjv]
        - √ Vainilla CSS [paolafdezz],[saraArbesu]
    - Configurar el entorno de desarrollo local (instalar las dependencias necesarias).
    - Documento de diseño
        - Guion y diagrama casos de uso - [mmposts]
        - Gant [mariagomezt]
        - Pert [mariagomezt]
        - Requisitos [nagelit]

3. Crear una estructura de página web básica
    - logica [nagelit],[amoyanoglz]
    - Semantica - HTML [agusspoxe] [johanZrEND] [josedavidd]
    - Diseño [paolafdezz],[saraArbesu]
    - Crear una estructura de página web básica con cabecera, cuerpo y pie de página.

4. Crear componentes de CV [paolafdezz],[saraArbesu],[amoyanoglz]
    - √ Crear componentes para cada sección del CV (por ejemplo, experiencia laboral, educación, habilidades).
        - √ aboutMe (profile, relevantYearsOfExperiencie, relevansLinks, significativeRelationships, interestingFacts, recommendations) - (Sección rosa [saraArbesu], [javiercjv])  
        - √ experience (jobs, publicArtifacts)
        - √ knowledge (languages[], hardSkills[], softSkills[], estudies[]) - (Sección verde [paolafdezz], [josedavidd])
        - √ careerPreferences (contact, requirements, preferences, goals[])
        - Html

5. Implementar la lógica para parsear JSON
    - √ Leer y parsear el JSON proporcionado. - [javiercjv]
    - Enlazar los datos del JSON con los componentes del CV. - [javiercjv]

6. Estilizar la página web
    - Aplicar estilos básicos a la página web. -
    - Asegurarse de que la página sea responsiva y se vea bien en diferentes tamaños de pantalla.

7. Pruebas
    - Probar la funcionalidad de la página web en varios navegadores.
    - Probar la responsividad en varios dispositivos.
    - Crear mas ejemplos JSON --> CV [nagelit], [manal127], [mariagomezt]

8. Despliegue
    - Configurar GitHub Pages para desplegar la página web. - [manal127]
    - Documentacion para crear un GitHub- [manal127]
    - Probar la página web en el entorno de producción y resolver cualquier problema que pueda surgir.

9. SEO y accesibilidad
    - Mejorar la accesibilidad de la página web (A11Y).
    - Optimizar la página web para SEO.

10. PDF
    - Generar
    - Descargar

## Planning

### GANTT

```mermaid
gantt
        dateFormat    YYYY-MM-DD
        title Gantt

        section Configuración inicial
        Crear repositorio :a1, 2023-07-12, 1d
        marco de trabajo :a1, 2023-07-12, 1d
        Configurar entorno:after a1, 5d

        section Crear estructura
        Crear estructura  :after a1, 5d

        section Crear componentes
        Crear componentes :after a1, 5d
        Parsear JSON :a1, 2023-07-12, 1d
        HTML desde JSON :after a1, 7d

        section Estilo CSS
        Colores desarollo :e1, 2023-07-17, 3d
        Maquetación :e1, 2023-07-17, 3d
        Colores finales :after e1, 1d

        section Pruebas
        funcionalidad :f1, 2023-07-20, 1d
        responsividad PCs :f1, 2023-07-20, 1d
        responsividad Móvil :f1, 2023-07-20, 1d
        Probar producción :f1, 2023-07-20, 1d

        section Despliegue
        Pages: desplegar :g1, 2023-07-20, 1d
        

        section SEO y accesibilidad
        Accesibilidad(A11Y) :h1, 2023-07-20, 1d
        SEO : i1, 2023-07-20, 1d

        section PDF
        Generar :i1, 2023-07-20, 1d
        Descargar : i1, 2023-07-20, 1d

```

### PERT

```mermaid
graph TB
        A[Crear y configurar el repositorio en GitHub]
        B[Elegir y configurar el marco de trabajo]
        C[Configurar el entorno de desarrollo local]
        D[Crear una estructura de página web básica]
        E[Crear componentes de CV]
        F[Leer y parsear el JSON proporcionado]
        G[Enlazar los datos del JSON con los componentes del CV]
        H[Aplicar estilos básicos a la página web]
        I[Asegurarse de que la página sea responsiva]
        J[Probar la funcionalidad de la página web]
        K[Probar la responsividad en varios dispositivos]
        L[Configurar GitHub Pages para desplegar la página web]
        M[Mejorar la accesibilidad de la página web - A11Y]
        N[Optimizar la página web para SEO]
        O[Generar PDF]
        P[Descargar PDF]
        A-->B
        B-->C
        C-->F
        F-->D
        F-->E
        D-->G
        E-->G
        G-->H
        G-->J
        H-->I
        I-->K
        J-->L
        K-->L
        L-->M
        L-->N
        L-->O
        O-->P
```
