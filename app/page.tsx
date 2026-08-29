"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const WHATSAPP = "https://wa.me/966555365305?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20%D8%A5%D8%AA%D9%82%D8%A7%D9%86%20%D9%81%D8%A7%D9%84%D9%8A%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B7%D9%84%D8%A8%20%D8%B9%D8%B1%D8%B6%20%D8%B3%D8%B9%D8%B1.";
const EMAIL = "mailto:hello.Itqan@gmail.com?subject=%D8%B7%D9%84%D8%A8%20%D8%B9%D8%B1%D8%B6%20%D8%B3%D8%B9%D8%B1%20-%20%D8%A5%D8%AA%D9%82%D8%A7%D9%86%20%D9%81%D8%A7%D9%84%D9%8A";

const services = [
  { name: "أثر مهني", label: "للأفراد والقيادات", image: "/service-athar.jpg", alt: "مختص يراجع ملفًا مهنيًا باحتراف", description: "نبني السيرة وLinkedIn وخطاب التقديم كمنظومة واحدة تُظهر القيمة المهنية بوضوح وتدعم فرص الوصول والمقابلة." },
  { name: "نبض الأداء", label: "للمنشآت والإدارات", image: "/service-nabd.jpg", alt: "لوحة أداء تنفيذية تعرض المؤشرات والنتائج", description: "لوحات قياس تربط المستهدف بالنتيجة والانحراف والإجراء، لتمنح الإدارة قراءة تنفيذية قابلة للمتابعة." },
  { name: "غرفة القرار", label: "للفرق القيادية", image: "/service-qarar.jpg", alt: "فريق قيادي يناقش قرارًا في غرفة اجتماعات", description: "نظام للاجتماعات والقرارات والتقارير يحوّل النقاش إلى مسؤول وموعد ودليل إغلاق واضح." },
  { name: "معمار التشغيل", label: "للتحول والحوكمة", image: "/service-memar.jpg", alt: "تصميم هندسي لمسارات التشغيل والحوكمة", description: "هندسة الإجراءات والحوكمة وجاهزية التحول في مسارات مترابطة، واضحة، قابلة للتطبيق والقياس." },
];

const facts = [["34", "ملفًا احترافيًا"], ["16", "حلًا ونموذجًا"], ["02", "العربية والإنجليزية"], ["16", "مؤشرًا متخصصًا"]];
const workflow = [
  ["01", "نحدّد الهدف", "نحوّل الاحتياج إلى نتيجة واضحة ونطاق عمل قابل للقياس."],
  ["02", "نبني المعيار", "نعرّف المؤشرات والأدوار وحدود النجاح قبل بدء التنفيذ."],
  ["03", "نفعّل المتابعة", "نربط كل مهمة بمسؤول وموعد وحالة واضحة."],
  ["04", "نرفع القرار", "نختصر النتائج والاستثناءات في صورة تدعم القرار الإداري."],
  ["05", "نقيس الأثر", "نراجع النتيجة ونوثّق التحسين للمرحلة التالية."],
];
const navItems = ["الرئيسية", "حلولنا", "أعمالنا", "منهجيتنا", "تواصل معنا"];

function ArrowIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function MailIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>; }
function WhatsAppIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M9 8.4c.2-.5.4-.5.7-.5h.4c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.1.4 0 .6.5 1 1.4 1.8 2.4 2.3.2.1.4.2.6 0l.8-1c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .3-.1 1.3-.7 1.8-.5.5-1.4.8-2.3.6-1-.2-2.4-.7-4.1-2.2-1.4-1.3-2.4-2.8-2.7-3.8-.3-.9 0-1.8.4-2.4Z" fill="currentColor" /></svg>; }

function Brand({ compact = false }: { compact?: boolean }) {
  return <div className={`brand-lockup${compact ? " compact" : ""}`}><img src="/itqan-icon.svg" alt="شعار إتقان فالي" /><span className="brand-copy"><b>إتقان فالي</b><strong>ITQAN VALLEY</strong><small>للتطوير وحلول الأعمال</small></span></div>;
}

export default function Home() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);
  const wheelLocked = useRef(false);
  const goTo = useCallback((index: number) => setActive(Math.max(0, Math.min(navItems.length - 1, index))), []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "PageDown") goTo(active + 1);
      if (event.key === "ArrowRight" || event.key === "PageUp") goTo(active - 1);
      if (event.key === "Home") goTo(0);
      if (event.key === "End") goTo(navItems.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  const onWheel = (event: React.WheelEvent) => {
    if (wheelLocked.current || Math.abs(event.deltaY) < 18) return;
    wheelLocked.current = true;
    goTo(active + (event.deltaY > 0 ? 1 : -1));
    window.setTimeout(() => { wheelLocked.current = false; }, 650);
  };

  return <main className="site-shell" dir="rtl" onWheel={onWheel}>
    <header className="site-header">
      <button className="brand-button" onClick={() => goTo(0)} aria-label="العودة إلى الرئيسية"><Brand compact /></button>
      <nav aria-label="التنقل الرئيسي">{navItems.map((item, index) => <button key={item} className={active === index ? "active" : ""} onClick={() => goTo(index)}><span>{String(index + 1).padStart(2, "0")}</span>{item}</button>)}</nav>
      <button className="header-cta" onClick={() => goTo(4)}>اطلب عرض سعر</button>
    </header>

    <div className="slides-window" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => {
      if (touchStart.current === null) return;
      const distance = touchStart.current - event.changedTouches[0].clientX;
      if (Math.abs(distance) > 45) goTo(active + (distance > 0 ? 1 : -1));
      touchStart.current = null;
    }}>
      <div className="slides-track" style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}>
        <section className="slide hero-slide" aria-hidden={active !== 0}>
          <div className="hero-orbit" aria-hidden="true"><span /><span /><span /></div>
          <div className="hero-content"><p className="kicker"><span /> قيمة تُرى في العمل</p><h1>نحوّل الخبرة<br />إلى <em>أثرٍ واضح.</em></h1><p className="hero-text">نبني حضورًا مهنيًا أقوى، ونصمم للمنشآت أنظمة أداء وتشغيل تجعل المتابعة والقرار أكثر وضوحًا.</p><div className="hero-actions"><button className="primary-action" onClick={() => goTo(1)}>استكشف حلولنا <ArrowIcon /></button><button className="ghost-action" onClick={() => goTo(4)}>تحدّث معنا</button></div></div>
          <div className="hero-brand" aria-label="هوية إتقان فالي"><Brand /></div><div className="hero-index"><b>01</b><span>05</span></div>
        </section>

        <section className="slide services-slide" aria-hidden={active !== 1}>
          <div className="slide-heading"><p className="framed-label"><span /> حلولنا <span /></p><h2>أربعة مسارات، أثر واحد</h2><p>حلول صيغت لتخدم الإنسان والعمل من أول ظهور مهني إلى نضج التشغيل.</p></div>
          <div className="services-grid">{services.map((service, index) => <article className="service-card" key={service.name}><div className="service-media"><img src={service.image} alt={service.alt} /><span>0{index + 1}</span></div><div className="service-copy"><small>{service.label}</small><h3>{service.name}</h3><p>{service.description}</p></div></article>)}</div>
        </section>

        <section className="slide proof-slide" aria-hidden={active !== 2}>
          <div className="proof-copy"><p className="framed-label light"><span /> أعمالنا بالأرقام <span /></p><h2>خبرة موثّقة،<br /><em>لا عبارات عامة.</em></h2><p>أرقام مستندة إلى نماذج وحلول تنفيذية بنيناها فعليًا، وتغطي التطوير المهني وقياس الأداء والجاهزية والتشغيل.</p><div className="facts-grid">{facts.map(([value, label]) => <article key={`${value}-${label}`}><strong>{value}</strong><span>{label}</span></article>)}</div></div>
          <div className="proof-visual"><div className="dashboard-frame"><div className="frame-top"><span /><span /><span /><b>لوحة أداء تنفيذية</b></div><img src="/dashboard-preview.png" alt="نموذج فعلي من لوحة أداء تنفيذية" /></div><div className="proof-badge"><b>20</b><span>معيار جاهزية<br />ضمن 6 محاور</span></div></div>
        </section>

        <section className="slide workflow-slide" aria-hidden={active !== 3}>
          <div className="slide-heading"><p className="framed-label"><span /> دورة العمل التنفيذية <span /></p><h2>من الاحتياج إلى أثرٍ قابل للقياس</h2><p>منهج واضح يحافظ على سرعة التنفيذ وجودة القرار في كل مرحلة.</p></div>
          <div className="workflow-grid">{workflow.map(([number, title, description], index) => <article key={number}><span className="step-number">{number}</span><div className="step-dot" />{index < workflow.length - 1 && <i aria-hidden="true" />}<h3>{title}</h3><p>{description}</p></article>)}</div>
        </section>

        <section className="slide contact-slide" aria-hidden={active !== 4}>
          <div className="contact-panel"><p className="framed-label light"><span /> الخطوة التالية <span /></p><h2>لديك تحدٍ؟<br /><em>لنحوّله إلى حل.</em></h2><p>أرسل احتياجك بإيجاز، وسنقترح المسار الأنسب ونحدد نطاق العمل والمخرجات بوضوح.</p><div className="contact-actions"><a className="whatsapp-action" href={WHATSAPP} target="_blank" rel="noreferrer"><WhatsAppIcon /> تواصل عبر واتساب</a><a className="mail-action" href={EMAIL}><MailIcon /> أرسل بريدًا إلكترونيًا</a></div></div>
          <aside className="contact-summary"><Brand /><p>هوية سعودية تصنع حضورًا مهنيًا واضحًا، وحلول أعمال تُفهم وتُطبّق وتُقاس.</p><div className="summary-points"><span>وضوح النطاق</span><span>جودة المخرجات</span><span>أثر قابل للقياس</span></div></aside>
          <footer><span>© 2026 إتقان فالي — جميع الحقوق محفوظة</span><b>شهادة العمل الحر: FL-291569463</b></footer>
        </section>
      </div>
    </div>

    <div className="slide-controls" aria-label="التحكم في الشرائح"><button onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="الشريحة السابقة"><ArrowIcon /></button><div>{navItems.map((item, index) => <button key={item} className={active === index ? "active" : ""} onClick={() => goTo(index)} aria-label={`انتقل إلى ${item}`} />)}</div><button onClick={() => goTo(active + 1)} disabled={active === navItems.length - 1} aria-label="الشريحة التالية"><ArrowIcon /></button></div>
  </main>;
}
