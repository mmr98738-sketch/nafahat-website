import { useState } from 'react';
import { Mail, MessageCircle, Send, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config';

export default function Support() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // تنبيه: لا يوجد خدمة إرسال فعلية — النموذج يوضح الطريقة فقط
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-navy dark:text-ivory mb-4">
            <span className="text-gold">الدعم</span> والمساعدة
          </h1>
          <p className="text-navy/60 dark:text-ivory/60 text-lg max-w-2xl mx-auto">
            نحن هنا لمساعدتك. اختر طريقة التواصل المناسبة لك
          </p>
        </div>

        {/* طرق التواصل */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* البريد */}
          <div className="p-6 rounded-2xl bg-ivory dark:bg-navy-dark border border-gold/10 text-center">
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <Mail size={24} className="text-gold" />
            </div>
            <h3 className="font-bold text-navy dark:text-ivory mb-2">البريد الإلكتروني</h3>
            {siteConfig.supportEmail ? (
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="text-sm text-gold hover:text-gold-light transition-colors"
              >
                {siteConfig.supportEmail}
              </a>
            ) : (
              <p className="text-sm text-navy/40 dark:text-ivory/40">سيُضاف قريبًا</p>
            )}
          </div>

          {/* واتساب */}
          <div className="p-6 rounded-2xl bg-ivory dark:bg-navy-dark border border-gold/10 text-center">
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={24} className="text-gold" />
            </div>
            <h3 className="font-bold text-navy dark:text-ivory mb-2">واتساب</h3>
            {siteConfig.whatsapp ? (
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold hover:text-gold-light transition-colors"
              >
                تواصل عبر واتساب
              </a>
            ) : (
              <p className="text-sm text-navy/40 dark:text-ivory/40">سيُضاف قريبًا</p>
            )}
          </div>

          {/* تويتر */}
          <div className="p-6 rounded-2xl bg-ivory dark:bg-navy-dark border border-gold/10 text-center">
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <Send size={24} className="text-gold" />
            </div>
            <h3 className="font-bold text-navy dark:text-ivory mb-2">تويتر</h3>
            {siteConfig.twitter ? (
              <a
                href={siteConfig.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold hover:text-gold-light transition-colors"
              >
                تواصل عبر تويتر
              </a>
            ) : (
              <p className="text-sm text-navy/40 dark:text-ivory/40">سيُضاف قريبًا</p>
            )}
          </div>
        </div>

        {/* نموذج التواصل */}
        <div className="rounded-2xl bg-ivory dark:bg-navy-dark border border-gold/10 p-8">
          <h2 className="text-2xl font-bold text-navy dark:text-ivory mb-2">نموذج التواصل</h2>
          <p className="text-navy/60 dark:text-ivory/60 text-sm mb-6">
            النموذج غير مفعل حاليًا ولا يرسل رسائل.
          </p>

          {/* تنبيه مهم */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-gold/5 border border-gold/20 mb-6">
            <AlertCircle size={20} className="text-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-navy/70 dark:text-ivory/70">
                <strong>ملاحظة:</strong> هذا النموذج توضيحي حاليًا. لإرسال الرسائل فعلًا، 
                يجب ربط النموذج بخدمة إرسال مثل Formspree أو EmailJS أو API مخصص.
                حتى يتم الربط، يمكنك التواصل عبر البريد الإلكتروني أو واتساب مباشرة.
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl bg-gold/5 border border-gold/20 text-center">
              <p className="text-navy/70 dark:text-ivory/70">
                لم تُرسل الرسالة؛ النموذج توضيحي وغير متصل بخدمة إرسال.
                <br />
                للتواصل الفعلي، استخدم البريد الإلكتروني أو واتساب أعلاه.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy dark:text-ivory mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-ivory dark:bg-navy-dark text-navy dark:text-ivory placeholder:text-navy/30 dark:placeholder:text-ivory/30 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all"
                  placeholder="اسمك الكامل"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy dark:text-ivory mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-ivory dark:bg-navy-dark text-navy dark:text-ivory placeholder:text-navy/30 dark:placeholder:text-ivory/30 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all"
                  placeholder="example@email.com"
                  dir="ltr"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy dark:text-ivory mb-2">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-ivory dark:bg-navy-dark text-navy dark:text-ivory placeholder:text-navy/30 dark:placeholder:text-ivory/30 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all resize-none"
                  placeholder="اكتب رسالتك هنا..."
                  required
                />
              </div>

              <button
                type="submit" disabled
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gold text-navy-dark font-semibold rounded-xl hover:bg-gold-light transition-all shadow-lg shadow-gold/20"
              >
                <Send size={18} />
                الإرسال غير متاح حاليًا
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
