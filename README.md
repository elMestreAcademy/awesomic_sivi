# AWESOMIC SIVI

<details>
    <summary>Primero, si no la tienes, crea una cuenta de Github</summary>

## Registrar una nueva cuenta GitHub

GitHub ofrece cuentas personales para individuos y organizaciones para equipos de personas que trabajan juntos.

Puedes crear una cuenta personal, lo cual funciona como tu identidad en GitHub.com o una organización, la cual permite cuentas personales múltiples para colaborar en varios proyectos. Para más información sobre los tipos de cuenta, consulta "Tipos de cuentas de GitHub".

Cuando creas una cuenta personal o de organización, debes seleccionar un plan de facturación para ella. Para obtener más información, vea «Productos de GitHub».

### Registrarse para una cuenta nueva

1. Si quieres crear una cuenta personal nueva, asegúrate de haber cerrado sesión en GitHub.
2. Vaya a la página de precios de GitHub.
3. Lea la información acerca de los diferentes productos y suscripciones que GitHub ofrece y, después, haga clic en el botón actualizar de la suscripción que quiere elegir.
4. Sigue las indicaciones para crear tu cuenta personal o de organización.

#### Pasos siguientes

1. "Verificar tu dirección de correo electrónico",
Puedes verificar tu dirección de correo electrónico después de registrarte con una cuenta nueva o cuando agregas una dirección de correo electrónico nueva. Si una dirección de correo electrónico no es válida para el envío o devuelve correos, quedará como no verificada.
2. "Crear una cuenta empresarial" en la documentación de GitHub Enterprise Cloud
3. GitHub public roadmap en el repositorio github/roadmap

</details>

## Es hora de generar tu CV

Forkea el repositorio. Aqui te recomiendo un buen artículo donde puedes seguir los pasos: [medium.com](https://medium.com/@6unpnp/fork-a-github-repository-and-deploy-its-github-pages-site-d55dc53988d)

Lo más sencillo será que el repositorio se llame <TU_USUARIO>.github.io

<details>
    <summary>Pasos para clonar un repo de GitHub</summary>

1. Para poder generar el CV clona nuestro repositorio en tu cuenta. En la pestaña <> Code abre el desplegable.
Elige el protocolo SSH y clona en tu sistema para manejo de repositorios, como SourceTree.
![github_capture_00](/img/github_capture_00.png)
2. En el sistema abre la pestaña clone, pega la ruta. Puedes cambiar el nombre y elegir la ruta, recomendación- elige el nombre de la carpeta con el nombre del repositorio y así podrás seguir fácilmente los ficheros.
3. Una vez clonado el repositorio abre tu editor de código (ejemplo - Visual Studio Code) y busca tu carpeta. Ya podrás ver todos los ficheros y trabajar en el json.
4. Incorpora tus datos y valida el json con [jsonlint.com](https://www.jsonlint.com/).
El validador te mostrará los posibles errores si aparecen en alguna línea del código, podrás solucionarlo fácilmente, los errores más comunes son esrrores de sangría, matriz no incluida o sin coma.
5. Una vez validado el json lo podrás visualizar con el GitHub Pages y en el sitio web donde se publicará.

</details>

> **Warning**
> Si clonas el repo, no podrás publiar en tu página a menos que cambies el remoto y publiques en tu cuenta!

Por defecto se utiliza el fichero ```/json/default_sample_ES.json```. Modifícalo a voluntad y adaptalo a tus necesidades.

Y ahora ya solo queda publicarlo para que se vea en tu Github Pages.

<details>
    <summary>Cómo publicar en Github Pages</summary>

1.- Crear un nuevo repositorio
![imagen](/img/imagen1.jpg)

2.- Escribe username.github.io --> cambie username por su nombre de usuario de GitHub.
![imagen](/img/imagen2.jpg)

3.- En configuración accede al apartado de Pages.

![imagen](/img/imagen3_1.jpg)

![imagen](/img/imagen3_2.jpg)

4.- En compilación e implementación, en "Origen", seleccione Implementar desde una rama.

![imagen](/img/imagen4.jpg)

5.- En rama seleccione un origen de publicación.
En el dominio escribe username.github.io --> cambiendo "username" por tu nombre de usuario de GitHub.

![imagen](/img/imagen5.jpg)

6.- Visite username.github.io para ver su sitio web. Esto puede tardar unos minutos.

![imagen](/img/imagen6_1.jpg)

![imagen](/img/imagen6_2.jpg)

</details>
