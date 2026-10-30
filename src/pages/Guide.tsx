import { useState } from 'react';
import { 
  Rocket, Palette, Award, GitCompare, Image, HelpCircle,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { guideSections } from '../config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  Rocket, Palette, Award, GitCompare, Image, HelpCircle,
};

export default function Guide() {
  const [openSection, setOpenSection] = useState<string | null>('getting-started');

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-navy dark:text-ivory mb-4">
            دليل <span className="text-gold">التاجر</span>
          </h1>
          <p className="text-navy/60 dark:text-ivory/60 text-lg max-w-2xl mx-auto">
            دليلك الشامل لاستخدام ثيم نفحات وتخصيصه لمتجرك على منصة سلة
          </p>
        </div>

        {/* قائمة سريعة */}
        <div className="mb-12 p-6 rounded-2xl bg-ivory-dark/50 dark:bg-navy/50 border border-gold/10">
          <h3 className="text-sm font-semibold text-gold mb-4">المحتويات</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {guideSections.map((section) => {
              const Icon = iconMap[section.icon] || Rocket;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setOpenSection(openSection === section.id ? null : section.id);
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-right hover:bg-gold/5 transition-colors"
                >
                  <Icon size={18} className="text-gold flex-shrink-0" />
                  <span className="text-sm text-navy dark:text-ivory">{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* الأقسام */}
        <div className="space-y-6">
          {guideSections.map((section) => {
            const Icon = iconMap[section.icon] || Rocket;
            const isOpen = openSection === section.id;

            return (
              <div
                key={section.id}
                id={section.id}
                className="rounded-2xl border border-gold/10 bg-ivory dark:bg-navy-dark overflow-hidden transition-all"
              >
                {/* عنوان القسم */}
                <button
                  onClick={() => setOpenSection(isOpen ? null : section.id)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gold/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <h2 className="text-xl font-bold text-navy dark:text-ivory">
                      {section.title}
                    </h2>
                  </div>
                  {isOpen ? (
                    <ChevronUp size={20} className="text-gold" />
                  ) : (
                    <ChevronDown size={20} className="text-navy/40 dark:text-ivory/40" />
                  )}
                </button>

                {/* المحتوى */}
                {isOpen && (
                  <div className="px-6 pb-6 space-y-6 animate-fade-in">
                    {section.content.map((item, index) => (
                      <div key={index} className="pr-4 border-r-2 border-gold/20">
                        <h3 className="text-lg font-semibold text-navy dark:text-ivory mb-2">
                          {item.heading}
                        </h3>
                        <p className="text-navy/70 dark:text-ivory/70 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ملاحظة */}
        <div className="mt-12 p-6 rounded-2xl bg-gold/5 border border-gold/20">
          <p className="text-sm text-navy/70 dark:text-ivory/70 leading-relaxed">
            <strong className="text-gold">ملاحظة:</strong> هذا الدليل مخصص لثيم نفحات على منصة سلة. 
            بعض الخطوات قد تختلف حسب إصدار منصة سلة المستخدم. 
            إذا واجهت أي مشكلة، لا تتردد في التواصل معنا عبر صفحة الدعم.
          </p>
        </div>
      </div>
    </div>
  );
}
