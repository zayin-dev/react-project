# Documentación del Proyecto React

## Explorar Colombia

![Pagina de bienvenida](./src/assets/home.png)

## Estructura del Proyecto

```
my-vue-app/
├── public/                             # Archivos estáticos y recursos
├── src/                                # Directorio de código fuente
│   ├── assets/                         # Recursos adicionales (imágenes, fuentes, etc.)
│   ├── componentes/                    # Componentes React reutilizables
│   │   ├── Navbar.jsx                  # Componente de navegación principal
│   │   ├── Footer.jsx                  # Componente de pie de página
│   │   ├── PrivateRoute.jsx            # Componente de protección de rutas
│   │   ├── FormularioConCollapse.jsx   # Formulario con secciones plegables
│   │   ├── Carrusel.jsx                # Componente de carrusel
│   │   └── MapaColombia.jsx            # Componente de mapa interactivo
│   ├── estilos/                        # Archivos CSS y estilos
│   ├── imagenes/                       # Recursos de imágenes
│   ├── paginas/                        # Componentes de páginas
│   │   ├── Inicio.jsx                  # Página principal
│   │   ├── Login.jsx                   # Página de inicio de sesión
│   │   └── Panel.jsx                   # Página de panel de control
│   ├── App.jsx                         # Componente principal de la aplicación
│   └── main.jsx                        # Punto de entrada de la aplicación
├── package.json                        # Dependencias y scripts del proyecto
├── vite.config.js                      # Configuración de Vite
└── index.html                          # Punto de entrada HTML
```
- **public/**: Contiene archivos estáticos que se sirven directamente al cliente
- **src/**: Directorio principal del código fuente
  - **assets/**: Recursos estáticos adicionales
  - **componentes/**: Componentes React reutilizables
    - **Navbar.jsx**: Barra de navegación principal. Contiene el login y un boton para ir a la pagina principal
    - **Footer.jsx**: Pie de página. Contiene enlaces e información sobre los creadores del proyecto
    - **PrivateRoute.jsx**: Componente de protección de rutas para acceso a la pagina privada
    - **FormularioConCollapse.jsx**: Componente de formulario. Al no estar conectado a una base de datos, no realiza ninguna funcion.
    - **Carrusel.jsx**: Componente de carrusel de imágenes. Es la responsable de que se vean las imagenes en la pagina principal
    - **MapaColombia.jsx**: Mapa interactivo de Colombia. Accesible despues de iniciar sesion en el sitio.
  - **estilos/**: Archivos CSS y recursos de estilos
  - **imagenes/**: Recursos de imágenes utilizados en la aplicación
  - **paginas/**: Componentes de páginas principales
    - **Inicio.jsx**: Página principal
    - **Login.jsx**: Login
    - **Panel.jsx**: Pagina accesible tras iniciar sesion
- **package.json**: Define las dependencias y scripts del proyecto
- **vite.config.js**: Configuración de la herramienta de compilación Vite
- **index.html**: Punto de entrada HTML de la aplicación

## Características Implementadas

### Navegación y Páginas
1. **Página Principal** (`/`)
   - Página de inicio con carrusel y secciones de contenido
   - Acceso público

   Esta es la pagina a la cual el usuario entrara apenas ingrese al sitio web. La pagina consta de cuatro partes principales. Consta de un menu principal, el cual contiene el logo del proyecto, un boton para ir a la pagina principal y un boton para iniciar sesion en el sitio web. 

   ![Menu principal](./src/assets/menu.png)
   
   Despues, esta un componente de carrousel, el cual contiene imagenes de varios lugares turisticos de colombia. 
   
   ![Menu principal](./src/assets/carrousel.png)

   Hay un formulario, el cual sirve para que el usuario se registre a la pagina 

   ![Formulario](./src/assets/form.png)
   
   Finalmente esta el footer, el cual contiene la informacion de los creadores del proyecto.

   ![Footer](./src/assets/footer.png)



2. **Panel** (`/panel`)
   - Requiere autenticación
   - Acceso controlado por el componente PrivateRoute



3. **Página de Inicio de Sesión** (`/login`)
   - Interfaz de autenticación de usuarios
   - Manejo del estado de inicio de sesión
   - Redirección al panel después de la autenticación exitosa

### Componentes
1. **Barra de Navegación** (`Navbar`)
   - Menú de navegación responsivo
   - Visualización dinámica del estado de autenticación
   - Funcionalidad de cierre de sesión

2. **Pie de Página** (`Footer`)
   - Pie de página consistente en toda la página
   - Contiene enlaces adicionales e información sobre los creadores

3. **Ruta Privada** (`PrivateRoute`)
   - Componente de protección de rutas
   - Maneja verificaciones de autenticación

4. **Formulario con Secciones Plegables** (`FormularioConCollapse`)
   - Componente de formulario interactivo
   - Secciones plegables para mejor organización
   - Manejo dinámico de formularios

5. **Carrusel** (`Carrusel`)
   - Componente de presentación de imágenes
   - Diseño responsivo
   - Controles de navegación

6. **Mapa de Colombia** (`MapaColombia`)
   - Componente de mapa interactivo
   - Representación visual de datos geográficos
   - Capacidades de selección de regiones

## Principios de Diseño Web Aplicados

1. **Diseño Responsivo**
   - Integración del framework Bootstrap
   - Enfoque mobile-first
   - Diseños flexibles que se adaptan a diferentes tamaños de pantalla

2. **Arquitectura Basada en Componentes**
   - Componentes React modulares
   - Elementos UI reutilizables
   - Separación de responsabilidades

3. **Aplicación de Página Única (SPA)**
   - Enrutamiento del lado del cliente con React Router
   - Transiciones suaves entre páginas
   - Gestión eficiente del estado

4. **Prácticas de Desarrollo Modernas**
   - Herramienta de compilación Vite para desarrollo rápido
   - Características de JavaScript ES6+
   - Módulos CSS para estilos con alcance

5. **Experiencia de Usuario (UX)**
   - Navegación consistente
   - Jerarquía visual clara
   - Diseño de interfaz intuitivo
   - Elementos de formulario interactivos
   - Transiciones y animaciones suaves

6. **Seguridad**
   - Rutas protegidas con el componente PrivateRoute
   - Gestión del estado de autenticación
   - Manejo seguro de datos

## Comenzando

1. Instalar dependencias:
   ```bash
   $ npm install
   ```

2. Instalar paquetes requeridos:
   ```bash
   $ npm install react-router-dom bootstrap react-bootstrap react-modal
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   $ npm run dev
   ```

4. Compilar para producción:
   ```bash
   $ npm run build
   ``` 