# 💰 App de Gestión Financiera Personal

Aplicación móvil de finanzas personales desarrollada con React Native y Firebase para gestionar ingresos, gastos y visualizar estadísticas financieras en tiempo real.

**GitHub del evaluador:** [@carlospujolima](https://github.com/carlospujolima)

## ✨ Características

### Core Features (Implementadas)
- ✅ **Autenticación**: Registro e inicio de sesión con Firebase Auth
- ✅ **CRUD Transacciones**: Crear, leer, actualizar y eliminar transacciones
- ✅ **Filtros Avanzados**: Por fecha, categoría y tipo (ingreso/gasto)
- ✅ **Dashboard Interactivo**: Gráficos de ingresos/gastos, balance y distribución por categorías
- ✅ **Sincronización en Tiempo Real**: Actualización automática entre dispositivos con Firestore

## 🛠 Stack Tecnológico

**React Native**

### Frontend
- **Framework**: React Native 0.73+
- **Lenguaje**: JavaScript

### Backend
- **BaaS**: Firebase
  - Authentication (User/Password)

### Testing
- **Testing Framework**: Jest
- **Testing Library**: React Native Testing Library

### Herramientas de Desarrollo
- **Control de Versiones**: Git

## 📦 Requisitos Previos

- **Node.js**: v18.0.0 o superior
- **npm** o **yarn**
- **React Native CLI**: `npm install -g react-native-cli`
- **Xcode** (para iOS, solo macOS)
- **Android Studio** (para Android)
- **Cuenta de Firebase** con proyecto configurado

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/[tu-usuario]/[nombre-repo].git
cd [nombre-repo]
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
```

### 3. Instalar pods (solo iOS)

```bash
cd ios && pod install && cd ..
```

## ⚙️ Configuración

### 1. Configurar Firebase

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilita **Authentication** (Email/Password)
3. Crea una base de datos en **Cloud Firestore**


### 2. Reglas de Firestore

Configura las reglas de seguridad en Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/transactions/{transaction} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🎮 Ejecución

### Modo Desarrollo

**iOS:**
```bash
npm run ios
# o
yarn ios
```

**Android:**
```bash
npm run android
# o
yarn android
```

### Metro Bundler
```bash
npm start
# o
yarn start
```

### Limpiar caché
```bash
npm run clean
# o
yarn clean
```

## 🧪 Testing

### Ejecutar todas las pruebas
```bash
npm test
# o
yarn test
```

### Ejecutar pruebas con cobertura
```bash
npm run test:coverage
# o
yarn test:coverage
```

### Ejecutar pruebas en modo watch
```bash
npm run test:watch
# o
yarn test:watch
```
## 👤 Autor

Mauricio Bermudes
- GitHub: [@Andre337](https://github.com/Andre337)
- Email: tu.email@ejemplo.com
