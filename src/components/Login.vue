<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
  
        <!-- Google Sign-In Button -->
        <button
          @click="googleSignIn"
          class="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Sign in with Google
        </button>
  
        <div class="flex items-center my-6">
          <hr class="flex-grow border-t border-gray-300" />
          <span class="mx-4 text-gray-500">OR</span>
          <hr class="flex-grow border-t border-gray-300" />
        </div>
  
        <!-- Email/Password Form -->
        <form @submit.prevent="emailPasswordSignIn" class="space-y-4">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            class="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>
  
        <!-- Error Message -->
        <p v-if="errorMessage" class="mt-4 text-red-500 text-center">{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { auth, googleProvider } from "../firebase";
  import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
  
  export default {
    setup() {
      const email = ref("");
      const password = ref("");
      const errorMessage = ref("");
  
      // Google Sign-In
      const googleSignIn = async () => {
        try {
          await signInWithPopup(auth, googleProvider);
        } catch (error) {
          errorMessage.value = error.message;
        }
      };
  
      // Email/Password Sign-In
      const emailPasswordSignIn = async () => {
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
        } catch (error) {
          errorMessage.value = error.message;
        }
      };
  
      return { email, password, errorMessage, googleSignIn, emailPasswordSignIn };
    }
  };
  </script>