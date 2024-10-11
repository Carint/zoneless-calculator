<div align="center">
  <a href="https://github.com/Carint/zoneless-calculator">
    <img src="https://www.svgrepo.com/show/395577/calculator.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Calculadora en Angular</h3>

  <p align="center">
    Un asombroso diseño funcional de un clásico proyecto de calculadora.
    <br />
  </p>
</div>

## Acerca del proyecto

<p align="center">
  <img src="public/calculator_img.png" width="500" height="500"/>
</p>

Creación de una estructura HTML hecha en Tailwind, mostrando soluciones a problemas estructurales al recrear el diseño en componentes de [Angular](https://angular.dev/). Créditos a [Klerith](https://www.creative-tim.com/twcomponents/component/calculator-ui-2) por el tema utilizado en el proyecto.

### Temas de aprendizajes:
* Tailwind
* Zoneless
* OnPush
* ViewEncapsulation
* ng-deep (Deprecared)
* Content Projection
* input Signals
* Standalone components
* Angular Schematics
* Host bindings

El diseño seleccionado, que se ha hecho funcional, requiere un nivel de complejidad real para aprender a utilizar estructuras modernas de Angular.

### Desarrollado con
En la elaboración de este proyecto se utilizaron las siguientes tecnologías:

<div align="center">
  <img height="50" src="https://user-images.githubusercontent.com/25181517/183890595-779a7e64-3f43-4634-bad2-eceef4e80268.png">
  <img height="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"> 
</div>
<br />

## Instalación del proyecto

### Prerrequisitos 

Antes de instalar el proyecto, se debe de contar con los siguientes requisitos previos:

1. `Node.js`: Es necesario tener instalado Node.js (versión 20.x o superior). Se puede descargar desde [nodejs.org](https://nodejs.org/).
   
2. `Angular CLI`: Para trabajar con el proyecto, se debe instalar la CLI de Angular globalmente en el sistema. Para hacerlo, se ejecuta el siguiente comando en la terminal:
   ```bash
   npm install -g @angular/cli
   ```

3. `Tailwind CSS`: El proyecto utiliza Tailwind CSS para los estilos. No es necesario instalar Tailwind manualmente, ya que está configurado dentro del proyecto, pero puede asegurarse de que su entorno esté listo para compilar estilos.

4. `Git`: Si desea clonar el proyecto desde el repositorio, asegúrase de tener Git instalado. Puede descargarlo desde [git-scm.com](https://git-scm.com/).

5. `Navegador moderno`: Se recomienda utilizar un navegador web moderno como Google Chrome, Firefox o Microsoft Edge para probar la aplicación.

### Servidor de desarrollo

Ejecuta `ng serve` para iniciar un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

### Generación de código

Ejecuta `ng generate component nombre-del-componente` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Compilación

Ejecuta `ng build` para compilar el proyecto. Los artefactos de la compilación se almacenarán en el directorio `dist/`.
