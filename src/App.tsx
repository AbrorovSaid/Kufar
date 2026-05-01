/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Layout, 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  ShieldCheck,
  MousePointerClick,
  Phone
} from 'lucide-react';

const COLORS = {
  bg: '#0a0a0a',
  card: '#151515',
  accent: '#3B82F6',
  text: '#FFFFFF',
  textMuted: 'rgba(255, 255, 255, 0.5)'
};

const ServiceCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-white/10 bg-[#151515] hover:border-blue-500/30 transition-all group"
    id={`service-${title.toLowerCase().replace(/\s+/g, '-')}`}
  >
    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
      <Icon className="text-blue-500" size={24} />
    </div>
    <h3 className="text-lg md:text-xl font-bold mb-3 text-white uppercase tracking-tight">{title}</h3>
    <p className="text-white/50 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30 relative overflow-hidden">
      {/* Background Accents (Optimized for performance on mobile) */}
      <div className="absolute top-[-5%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-900/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-indigo-900/10 rounded-full blur-[70px] md:blur-[100px] pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 px-6 md:px-12 py-6 md:py-8 flex justify-between items-center" id="main-nav">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-3.5 h-3.5 md:w-4 md:h-4 border-2 border-white rounded-sm"></div>
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight uppercase">Dev.Studio</span>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <a href="tel:+375255017891" className="px-3 md:px-4 py-1.5 border border-white/10 rounded-full text-[9px] md:text-[10px] font-bold text-white/40 tracking-[0.1em] md:tracking-[0.2em] uppercase hover:text-white hover:border-white/20 transition-colors">
            <span className="hidden sm:inline">+375 (25) 501-78-91</span>
            <span className="sm:hidden text-[10px]">Позвонить</span>
          </a>
          <button className="text-[11px] md:text-sm font-bold uppercase tracking-widest hover:text-blue-500 transition-colors">Меню</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-12 pt-12 md:pt-20 pb-20 md:pb-32" id="hero">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="col-span-12 lg:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 flex items-center justify-center lg:justify-start gap-3 md:gap-4"
              >
                <div className="h-[1px] w-8 md:w-12 bg-blue-500"></div>
                <span className="text-blue-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-[10px] font-bold">Профессиональная разработка</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter mb-8 md:mb-10 uppercase"
              >
                САЙТЫ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                  ПОД КЛЮЧ
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/50 text-base md:text-xl max-w-[540px] mx-auto lg:mx-0 mb-10 md:mb-12 leading-relaxed"
              >
                Создаем современные сайты, которые привлекут к Вам клиентов. От идеи и дизайна до верстки и SEO-оптимизации. Гарантируем запуск от 7 до 14 дней.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                <button 
                  onClick={() => window.location.href = 'https://t.me/Poles_GU'}
                  className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold text-lg rounded-2xl hover:bg-gray-200 transition-all active:scale-95" 
                  id="hero-primary-cta"
                >
                  Заказать проект
                </button>
                <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all" id="hero-secondary-cta">
                  Наше портфолио
                </button>
              </motion.div>
            </div>

            {/* Right Visual (The Card from Design) */}
            <div className="hidden lg:block col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full aspect-square bg-gradient-to-br from-blue-600/10 to-transparent border border-white/5 rounded-[48px] p-10 flex flex-col gap-8 relative overflow-hidden"
              >
                {/* Mini Browser Mockup */}
                <div className="bg-[#151515] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transform translate-x-6">
                  <div className="bg-[#1c1c1c] px-4 py-2.5 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/30"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/30"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/30"></div>
                  </div>
                  <div className="p-5">
                    <div className="h-3 w-3/4 bg-blue-500/20 rounded-full mb-3"></div>
                    <div className="h-2 w-1/2 bg-white/5 rounded-full mb-2"></div>
                    <div className="h-2 w-1/3 bg-white/5 rounded-full"></div>
                  </div>
                </div>
                
                {/* Code Snippet Mockup */}
                <div className="bg-[#151515] border border-white/10 rounded-2xl p-6 shadow-2xl transform -translate-x-6 -translate-y-4 font-mono text-[11px] text-white/30">
                  <div className="flex gap-4 mb-2"><span className="text-pink-400">class</span> <span className="text-blue-400">Website</span> {'{'}</div>
                  <div className="pl-4"><span className="text-indigo-400">constructor</span>(props) {'{'}</div>
                  <div className="pl-8">this.status = <span className="text-green-400">'premium'</span>;</div>
                  <div className="pl-8 text-blue-400/50">{'// High conversion grid'}</div>
                  <div className="pl-4">{'}'}</div>
                  <div>{'}'}</div>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] text-blue-400 uppercase tracking-widest font-black">Landing Page</span>
                  <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/40 uppercase tracking-widest font-black">E-commerce</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-20 md:py-32 px-6 md:px-12 bg-white/[0.02]" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20 flex flex-col items-center text-center">
            <span className="text-blue-500 font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-[9px] md:text-[10px] mb-4">Наши возможности</span>
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-tight">Что мы предлагаем</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard 
              icon={Layout}
              title="Landing Page"
              description="Одностраничные высококонверсионные сайты для моментального захвата внимания."
              delay={0.1}
            />
            <ServiceCard 
              icon={Globe}
              title="Корпоративный"
              description="Масштабируемые сайты для бизнеса с уникальной архитектурой и дизайном."
              delay={0.2}
            />
            <ServiceCard 
              icon={Smartphone}
              title="Мобильный UX"
              description="Безупречная работа и интеграция под все виды телефонов, планшетов и гаджетов. 100% адаптивность."
              delay={0.3}
            />
            <ServiceCard 
              icon={Zap}
              title="SEO Старт"
              description="Техническая подготовка сайта к продвижению в поисковых системах с первого дня."
              delay={0.4}
            />
            <ServiceCard 
              icon={ShieldCheck}
              title="Безопасность"
              description="Защищенный хостинг, шифрование данных и регулярное резервное копирование."
              delay={0.5}
            />
            <ServiceCard 
              icon={Code2}
              title="API Сервисы"
              description="Интеграция сторонних сервисов, платежных систем и CRM любой сложности."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Footer Grid as per Elegant Dark */}
      <footer className="relative z-10 px-6 md:px-12 py-12 md:py-16 border-t border-white/10 bg-[#0a0a0a]" id="footer">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center sm:text-left md:text-left">
            <div>
              <div className="text-3xl md:text-4xl font-black mb-1 md:mb-2 text-white">15+</div>
              <div className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.2em] font-black">Проектов реализовано</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black mb-1 md:mb-2 text-white">100%</div>
              <div className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.2em] font-black">Адаптивность</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black mb-1 md:mb-2 text-white">SEO</div>
              <div className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.2em] font-black">Оптимизация в подарок</div>
            </div>
            <div className="sm:text-right">
              <div className="text-lg md:text-xl font-bold mb-1">+375 (25) 501-78-91</div>
              <div className="text-[9px] md:text-[10px] text-blue-500 uppercase tracking-[0.2em] font-black">Свяжитесь с нами прямо сейчас</div>
            </div>
          </div>
          
          <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] text-white/20 uppercase tracking-widest font-medium text-center">
            <span>© 2026 Said Abrorov</span>
            <div className="flex gap-6 md:gap-8">
              <a href="https://t.me/Poles_GU" className="hover:text-blue-500 transition-colors">Telegram</a>
              <a href="https://wa.me/375255017891" className="hover:text-blue-500 transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <motion.a
        href="tel:+375255017891"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)] group overflow-visible"
        aria-label="Call now"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-blue-600 rounded-full -z-10 opacity-50"
        />
        <Phone className="text-white group-hover:rotate-12 transition-transform" size={28} fill="white" />
      </motion.a>
    </div>
  );
}
