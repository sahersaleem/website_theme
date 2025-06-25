import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray:"var('--gray')",
        background:"var('--background')",
        forground:"var('--foreground')",
        purple:"var('--purple')"
      },
      screens:{
        'xs': '360px',   
        'sm': '640px',    
        'md': '768px',   
        'lg': '1024px',   
        'xl': '1280px',  
        '2xl': '1536px',  
        '3xl': '1920px',
      },
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        'full': '9999px',
      },
     borderWidth: {
        '1': '1px',
        '3': '3px',
        '5': '5px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
      },
      fontSize: {
        a:['0.87rem', {lineHeight:'1.25rem'}],
        h1: ['3.75rem', { lineHeight: '1rem' }], 
        h2: ['2.25rem', { lineHeight: '2.5rem' }], 
        h3: ['1.125rem', { lineHeight: '1.75rem' }],
        h4:['1.5rem' , {lineHeight:'2rem'}],
        p:['1.25rem',{lineHeight:'1.75rem'}],
        btn:['1.125rem' , {lineHeight:'1.75rem'}],
        base:['0.875rem',{lineHeight:'1.25rem'}],
        blockquote:['1.5rem' , {lineHeight:'2rem'}]
      },
      
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
export default config;
