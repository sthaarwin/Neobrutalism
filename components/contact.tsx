'use client';

import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Main Contact Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side */}
          <div className="bg-background border-4 border-background p-12 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tighter">
              READY TO
              <br />
              INITIATE THE NEXT
              <br />
              <span className="bg-primary inline-block px-4">DIGITAL PROTOCOL</span>
            </h2>
            <p className="text-foreground text-lg font-medium mb-8 leading-relaxed">
              Let&apos;s collaborate on innovative projects that explore the boundaries of technology, creativity, and human potential.
            </p>

            <div className="space-y-4">
              <Link
                href="mailto:sthaarwin123@gmail.com"
                className="block border-4 border-foreground bg-primary text-foreground px-8 py-4 font-bold text-center hover:translate-x-1 hover:translate-y-1 transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              >
                SEND EMAIL
              </Link>
              <p className="text-center text-foreground text-sm font-medium">
                sthaarwin123@gmail.com
              </p>
            </div>
          </div>

          {/* Right Side - Social & Links */}
          <div className="space-y-6">
            <div className="bg-background border-4 border-background p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-bold text-foreground mb-6 tracking-tight">CONNECT WITH ME</h3>
              <div className="space-y-3">
                <Link
                  href="https://github.com/sthaarwin"
                  className="block border-4 border-foreground bg-accent text-accent-foreground px-6 py-3 font-bold hover:translate-x-1 hover:translate-y-1 transition-all shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                >
                  GITHUB
                </Link>
                <Link
                  href="#"
                  className="block border-4 border-foreground bg-secondary text-secondary-foreground px-6 py-3 font-bold hover:translate-x-1 hover:translate-y-1 transition-all shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                >
                  LINKEDIN
                </Link>
                <Link
                  href="#"
                  className="block border-4 border-foreground bg-primary text-foreground px-6 py-3 font-bold hover:translate-x-1 hover:translate-y-1 transition-all shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                >
                  TWITTER
                </Link>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-background border-4 border-background p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-bold text-foreground mb-6 tracking-tight">QUICK INFO</h3>
              <div className="space-y-3 text-foreground font-medium">
                <p><span className="font-bold">STATUS:</span> Available for Projects</p>
                <p><span className="font-bold">TIMEZONE:</span> UTC+0</p>
                <p><span className="font-bold">RESPONSE TIME:</span> 24-48 Hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-4 border-background pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-background border-4 border-background p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <p className="text-foreground font-bold mb-2">LANGUAGES</p>
              <p className="text-foreground text-sm">Systems, C++, Python, JavaScript</p>
            </div>
            <div className="bg-background border-4 border-background p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <p className="text-foreground font-bold mb-2">FRAMEWORKS</p>
              <p className="text-foreground text-sm">React, Next.js, Three.js, WebGL</p>
            </div>
            <div className="bg-background border-4 border-background p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <p className="text-foreground font-bold mb-2">SPECIALTIES</p>
              <p className="text-foreground text-sm">AI, 3D Graphics, Low-Level Systems</p>
            </div>
            <div className="bg-background border-4 border-background p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <p className="text-foreground font-bold mb-2">MISSION</p>
              <p className="text-foreground text-sm">Building the future one line at a time</p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex justify-between items-center pt-8 border-t-4 border-background">
            <p className="text-background font-bold text-sm">© 2024 ARWIN. ALL SYSTEMS GO.</p>
            <p className="text-background font-bold text-sm">NEOBRUTALISM // DESIGN</p>
          </div>
        </div>
      </div>
    </section>
  );
}
