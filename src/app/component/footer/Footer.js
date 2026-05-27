"use client"

export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-700 border-t border-gray-900 pt-16 pb-8 px-8">
         <div className="container mx-auto max-w-6xl">
        
        {/* The Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-sky-100 font-sans">Ashan.dev</h2>
            <p className="text-white text-sm ">
              Building modern web experiences with Next.js and Spring Boot.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-bold text-sky-100 mb-4 uppercase text-sm tracking-widest">Links</h3>
            <ul className="flex flex-col gap-2 text-white">
              <li><a href="#home" className="hover:text-sky-600 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-sky-600 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-sky-600 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Col 3: Socials */}
          <div>
            <h3 className="font-bold text-sky-100 mb-4 uppercase text-sm tracking-widest">Connect</h3>
            <ul className="flex flex-col gap-2 text-white">
              <li>
                <a href="https://github.com/AshanDhanush/AshanDhanush" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sky-600 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.205 11.387.599.111.82-.26.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.303 3.492.996.108-.775.418-1.304.762-1.603-2.665-.304-5.467-1.333-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.301 1.23.958-.266 1.983-.399 3.003-.404 1.02.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.236 1.91 1.236 3.221 0 4.61-2.807 5.625-5.48 5.921.43.371.823 1.103.823 2.222v3.293c0 .319.22.694.82.576C20.565 21.8 24 17.303 24 12c0-6.629-5.371-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sky-600 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.41h3.129V8.797c0-3.1 1.892-4.788 4.657-4.788 1.325 0 2.463.099 2.795.143v3.241l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.311h3.59l-.467 3.296h-3.123V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2 text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-sky-600">
                  <path d="M20.52 3.48C18.2 1.16 15.09 0 11.83 0 5.3 0 .06 5.24.06 11.78c0 2.08.55 4.1 1.6 5.88L0 24l6.56-1.72c1.64.9 3.48 1.38 5.28 1.38 6.53 0 11.77-5.24 11.77-11.78 0-3.25-1.16-6.36-3.09-8.4zM12 21.8c-1.65 0-3.24-.44-4.62-1.27l-.33-.2-3.9 1.02 1.04-3.8-.22-.35C2.2 15.63 1.8 13.76 1.8 11.8 1.8 6.2 6.27 1.8 11.83 1.8c2.96 0 5.74 1.15 7.83 3.23 2.08 2.09 3.24 4.86 3.24 7.84 0 5.61-4.47 10.23-10.9 10.23zm5.45-7.4c-.3-.15-1.8-.88-2.07-.98-.28-.1-.47-.15-.66.15s-.76.98-.93 1.18c-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.28-.02-.43.13-.57.14-.14.31-.37.46-.55.15-.2.2-.34.3-.56.1-.22.05-.42-.02-.58-.07-.15-.66-1.6-.9-2.2-.24-.6-.48-.52-.66-.52h-.56c-.2 0-.52.07-.8.39-.28.32-1.06 1.04-1.06 2.52 0 1.48 1.09 2.92 1.24 3.12.15.2 2.14 3.35 5.18 4.7.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.1 1.8-.73 2.05-1.44.24-.7.24-1.3.17-1.44-.07-.15-.26-.23-.55-.38z" />
                </svg>
                WhatsApp: +94 757 223 665
              </li>
            </ul>
          </div>

          {/* Col 4: Project Highlight (AutoHive) */}
          <div>
            <h3 className="font-bold text-sky-100 mb-4 uppercase text-sm tracking-widest">Featured</h3>
            <p className="text-sm text-whiteitalic">
              Check out "HealthSync" — my latest Hospital Appointment System.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Ashan Dhanushka. All rights reserved.</p>
        </div>
      </div>
    </footer>
    );
}