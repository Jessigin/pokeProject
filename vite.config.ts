import tailwind from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	server: {
		watch: {
			usePolling: true,
		},
	},
	plugins: [react(), tailwind()],
});
