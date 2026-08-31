"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Language = "ar" | "en";

const TOTAL_SLIDES = 6;

const content = {
  ar: {
    nav: ["الرئيسية", "حلولنا", "الخدمات", "أعمالنا", "منهجيتنا", "تواصل معنا"],
    brand: { primary: "إتقان فالي", secondary: "ITQAN VALLEY", tagline: "للتطوير وحلول الأعمال", alt: "شعار إتقان فالي" },
    common: { start: "ابدأ بطلبك", home: "العودة إلى الرئيسية", navigation: "التنقل الرئيسي", language: "عرض الموقع باللغة الإنجليزية" },
    hero: {
      kicker: "قيمة تُرى في العمل",
      title: "نحوّل الخبرة",
      accent: "إلى أثرٍ واضح.",
      text: "نبني حضورًا مهنيًا أقوى، ونصمم للمنشآت أنظمة أداء وتشغيل تجعل المتابعة والقرار أكثر وضوحًا.",
      explore: "استكشف حلولنا",
      talk: "تحدّث معنا",
      identity: "هوية إتقان فالي",
    },
    solutions: {
      label: "حلولنا",
      title: "أربعة مسارات، أثر واحد",
      intro: "حلول صيغت لتخدم الإنسان والعمل من أول ظهور مهني إلى نضج التشغيل.",
      items: [
        { name: "أثر مهني", label: "للأفراد والقيادات", image: "/service-athar-v2.jpg", alt: "ملف مهني أنيق يعبّر عن الحضور المهني", description: "نبني السيرة وLinkedIn وخطاب التقديم كمنظومة واحدة تُظهر القيمة المهنية بوضوح وتدعم فرص الوصول والمقابلة." },
        { name: "بوصلة الأداء", label: "للمنشآت والإدارات", image: "/service-nabd-v2.jpg", alt: "مقياس دقيق يعبّر عن بوصلة الأداء", description: "لوحات قياس تربط المستهدف بالنتيجة والانحراف والإجراء، لتمنح الإدارة قراءة تنفيذية قابلة للمتابعة." },
        { name: "مسار القرار", label: "للفرق القيادية", image: "/service-qarar-v2.jpg", alt: "ملف قرار تتقاطع عنده مسارات مضيئة", description: "نظام للاجتماعات والقرارات والتقارير يحوّل النقاش إلى مسؤول وموعد ودليل إغلاق واضح." },
        { name: "هندسة الأعمال", label: "للتحول والحوكمة", image: "/service-handasa-v2.jpg", alt: "وحدات مترابطة تعبّر عن هندسة الأعمال", description: "نصمم الإجراءات والحوكمة وجاهزية التحول في مسارات مترابطة، واضحة، قابلة للتطبيق والقياس." },
      ],
    },
    catalog: {
      label: "خدماتنا",
      titleTop: "خدمات مصممة",
      titleBottom: "حول هدفك",
      choose: "اختر فئة الخدمات",
      groups: [
        {
          audience: "للأفراد",
          lead: "حضور مهني يعبّر عن خبرتك ويقوّي فرصك.",
          items: [
            ["سيرة تبرزك", "سيرة احترافية متوافقة مع أنظمة الفرز ATS."],
            ["حضور يعرّف بك", "إعادة بناء LinkedIn ليعرض قيمتك المهنية بوضوح."],
            ["خطاب يوصلك", "خطاب يربط خبرتك مباشرة بالفرصة المستهدفة."],
            ["ملف يليق بالقيادة", "سيرة تنفيذية تبرز الأثر والقرارات والإنجازات."],
            ["مراجعة تضبط سيرتك", "تشخيص دقيق للسيرة مع توصيات قابلة للتطبيق."],
            ["انطلاقة متكاملة", "سيرة باللغتين وLinkedIn وخطاب تقديم متكامل."],
          ],
        },
        {
          audience: "للأعمال",
          lead: "أنظمة واضحة تربط القياس بالمسؤولية والقرار.",
          items: [
            ["أداء ينقاس", "ربط المستهدفات بالمؤشرات والنتائج والإجراءات."],
            ["مؤشرات توضّح", "لوحة قياس مصممة وفق أولويات المنشأة."],
            ["قرار يتنفّذ", "متابعة القرار من الاجتماع حتى التنفيذ والإغلاق."],
            ["تقرير يختصر", "تحويل البيانات إلى موجز واضح يدعم القرار."],
            ["تشغيل ينضبط", "توثيق الأدوار والاعتمادات ومسارات العمل."],
          ],
        },
      ],
    },
    proof: {
      label: "أعمالنا بالأرقام",
      title: "خبرة موثّقة،",
      accent: "لا عبارات عامة.",
      text: "أرقام مستندة إلى نماذج وحلول تنفيذية بنيناها فعليًا، وتغطي التطوير المهني وقياس الأداء والجاهزية والتشغيل.",
      facts: [["34", "ملفًا احترافيًا"], ["16", "حلًا ونموذجًا"], ["02", "العربية والإنجليزية"], ["16", "مؤشرًا متخصصًا"]],
      dashboard: "لوحة أداء تنفيذية",
      dashboardAlt: "نموذج فعلي من لوحة أداء تنفيذية",
      badge: "معيار جاهزية",
      badgeSub: "ضمن 6 محاور",
    },
    workflow: {
      label: "دورة العمل التنفيذية",
      title: "من الاحتياج إلى أثرٍ قابل للقياس",
      intro: "منهج واضح يحافظ على سرعة التنفيذ وجودة القرار في كل مرحلة.",
      bridgeLabel: "مسار تحويل الاحتياج إلى أثر",
      bridgeTitle: "مسار متصل",
      bridge: ["المدخل", "التحليل", "الإجراء", "القرار", "الأثر"],
      steps: [
        ["01", "نحدّد الهدف", "نحوّل الاحتياج إلى نتيجة واضحة ونطاق عمل قابل للقياس."],
        ["02", "نبني المعيار", "نعرّف المؤشرات والأدوار وحدود النجاح قبل بدء التنفيذ."],
        ["03", "نفعّل المتابعة", "نربط كل مهمة بمسؤول وموعد وحالة واضحة."],
        ["04", "نرفع القرار", "نختصر النتائج والاستثناءات في صورة تدعم القرار الإداري."],
        ["05", "نقيس الأثر", "نراجع النتيجة ونوثّق التحسين للمرحلة التالية."],
      ],
    },
    contact: {
      label: "الخطوة التالية",
      title: "لديك تحدٍ؟",
      accent: "لنحوّله إلى حل.",
      text: "أرسل احتياجك بإيجاز، وسنقترح المسار الأنسب ونحدد نطاق العمل والمخرجات بوضوح.",
      whatsapp: "تواصل عبر واتساب",
      email: "أرسل بريدًا إلكترونيًا",
      whatsappMessage: "مرحبًا إتقان فالي، أرغب في طلب عرض سعر.",
      emailSubject: "طلب عرض سعر - إتقان فالي",
      summary: "هوية سعودية تصنع حضورًا مهنيًا واضحًا، وحلول أعمال تُفهم وتُطبّق وتُقاس.",
      points: ["وضوح النطاق", "جودة المخرجات", "أثر قابل للقياس"],
      copyright: "© 2026 إتقان فالي — جميع الحقوق محفوظة",
      certificate: "شهادة العمل الحر: FL-291569463",
    },
    controls: { label: "التحكم في الشرائح", previous: "الشريحة السابقة", next: "الشريحة التالية", go: "انتقل إلى" },
  },
  en: {
    nav: ["Home", "Solutions", "Services", "Our Work", "Method", "Contact"],
    brand: { primary: "ITQAN VALLEY", secondary: "إتقان فالي", tagline: "Development & Business Solutions", alt: "Itqan Valley logo" },
    common: { start: "Start Your Request", home: "Back to home", navigation: "Main navigation", language: "عرض الموقع باللغة العربية" },
    hero: {
      kicker: "Value you can see at work",
      title: "We turn expertise",
      accent: "into visible impact.",
      text: "We build stronger professional presence and design performance and operating systems that make follow-through and decisions clearer.",
      explore: "Explore Our Solutions",
      talk: "Talk to Us",
      identity: "Itqan Valley identity",
    },
    solutions: {
      label: "Our Solutions",
      title: "Four paths. One impact.",
      intro: "Solutions built for people and organizations—from professional presence to operational maturity.",
      items: [
        { name: "Professional Impact", label: "For professionals & leaders", image: "/service-athar-v2.jpg", alt: "A refined professional profile", description: "We align your CV, LinkedIn profile, and cover letter into one clear professional story that supports stronger reach and interviews." },
        { name: "Performance Compass", label: "For organizations & teams", image: "/service-nabd-v2.jpg", alt: "A precision gauge representing performance", description: "Dashboards connect targets, results, variance, and action to give management a clear, trackable executive view." },
        { name: "Decision Path", label: "For leadership teams", image: "/service-qarar-v2.jpg", alt: "Decision paths converging on one file", description: "A meeting, decision, and reporting system that turns discussion into an owner, deadline, and clear closure evidence." },
        { name: "Business Architecture", label: "For transformation & governance", image: "/service-handasa-v2.jpg", alt: "Connected modules representing business architecture", description: "We design processes, governance, and transformation readiness as connected paths that are clear, practical, and measurable." },
      ],
    },
    catalog: {
      label: "Our Services",
      titleTop: "Services designed",
      titleBottom: "around your goal",
      choose: "Choose a service category",
      groups: [
        {
          audience: "Individuals",
          lead: "A professional presence that represents your experience and strengthens your opportunities.",
          items: [
            ["Standout CV", "Professional writing optimized for ATS screening."],
            ["LinkedIn Presence", "A rebuilt profile that communicates your professional value."],
            ["Opportunity Letter", "A tailored letter connecting your experience to the role."],
            ["Leadership Profile", "An executive CV focused on impact, decisions, and results."],
            ["CV Review", "A detailed diagnostic with practical recommendations."],
            ["Complete Launch", "Bilingual CV, LinkedIn profile, and cover letter."],
          ],
        },
        {
          audience: "Businesses",
          lead: "Clear systems that connect measurement, accountability, and decisions.",
          items: [
            ["Measurable Performance", "Connect targets with indicators, results, and actions."],
            ["Clear Indicators", "A dashboard designed around organizational priorities."],
            ["Decisions Delivered", "Track decisions from meeting through execution and closure."],
            ["Executive Brief", "Turn data into a concise, decision-ready report."],
            ["Disciplined Operations", "Document roles, approvals, and operating workflows."],
          ],
        },
      ],
    },
    proof: {
      label: "Our Work in Numbers",
      title: "Documented expertise,",
      accent: "not broad claims.",
      text: "Numbers grounded in real executive models and solutions we have built across professional development, performance, readiness, and operations.",
      facts: [["34", "Professional profiles"], ["16", "Solutions & models"], ["02", "Arabic & English"], ["16", "Specialized indicators"]],
      dashboard: "Executive Performance Dashboard",
      dashboardAlt: "A real executive performance dashboard model",
      badge: "Readiness criteria",
      badgeSub: "across 6 dimensions",
    },
    workflow: {
      label: "Executive Workflow",
      title: "From need to measurable impact",
      intro: "A clear method that protects execution speed and decision quality at every stage.",
      bridgeLabel: "Path from need to impact",
      bridgeTitle: "Connected path",
      bridge: ["Input", "Analysis", "Action", "Decision", "Impact"],
      steps: [
        ["01", "Define the Goal", "Turn the need into a clear outcome and measurable scope."],
        ["02", "Set the Standard", "Define indicators, roles, and success criteria before execution."],
        ["03", "Activate Follow-up", "Connect every task to an owner, deadline, and clear status."],
        ["04", "Enable the Decision", "Summarize results and exceptions in a decision-ready view."],
        ["05", "Measure the Impact", "Review the outcome and document improvements for the next cycle."],
      ],
    },
    contact: {
      label: "The Next Step",
      title: "Have a challenge?",
      accent: "Let’s turn it into a solution.",
      text: "Share your need briefly. We will recommend the right path and define the scope and deliverables clearly.",
      whatsapp: "Contact on WhatsApp",
      email: "Send an Email",
      whatsappMessage: "Hello Itqan Valley, I would like to request a quote.",
      emailSubject: "Request for Quote - Itqan Valley",
      summary: "A Saudi identity that builds clear professional presence and business solutions that can be understood, applied, and measured.",
      points: ["Clear scope", "Quality deliverables", "Measurable impact"],
      copyright: "© 2026 Itqan Valley — All rights reserved",
      certificate: "Freelance Certificate: FL-291569463",
    },
    controls: { label: "Slide controls", previous: "Previous slide", next: "Next slide", go: "Go to" },
  },
} as const;

function ArrowIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function MailIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>; }
function WhatsAppIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M9 8.4c.2-.5.4-.5.7-.5h.4c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.1.4 0 .6.5 1 1.4 1.8 2.4 2.3.2.1.4.2.6 0l.8-1c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .3-.1 1.3-.7 1.8-.5.5-1.4.8-2.3.6-1-.2-2.4-.7-4.1-2.2-1.4-1.3-2.4-2.8-2.7-3.8-.3-.9 0-1.8.4-2.4Z" fill="currentColor" /></svg>; }

function Brand({ compact = false, language }: { compact?: boolean; language: Language }) {
  const brand = content[language].brand;
  return <div className={`brand-lockup${compact ? " compact" : ""}`}><img src="/itqan-icon.svg" alt={brand.alt} /><span className="brand-copy"><b>{brand.primary}</b><strong>{brand.secondary}</strong><small>{brand.tagline}</small></span></div>;
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [catalogAudience, setCatalogAudience] = useState(0);
  const [language, setLanguage] = useState<Language>("ar");
  const touchStart = useRef<number | null>(null);
  const wheelLocked = useRef(false);
  const t = content[language];
  const direction = language === "ar" ? "rtl" : "ltr";
  const activeCatalog = t.catalog.groups[catalogAudience];
  const whatsapp = `https://wa.me/966555365305?text=${encodeURIComponent(t.contact.whatsappMessage)}`;
  const email = `mailto:itqan@itqanvalley.com?subject=${encodeURIComponent(t.contact.emailSubject)}`;
  const goTo = useCallback((index: number) => setActive(Math.max(0, Math.min(TOTAL_SLIDES - 1, index))), []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "PageDown") goTo(active + 1);
      if (event.key === "ArrowRight" || event.key === "PageUp") goTo(active - 1);
      if (event.key === "Home") goTo(0);
      if (event.key === "End") goTo(TOTAL_SLIDES - 1);
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

  return <main className={`site-shell lang-${language}`} dir={direction} onWheel={onWheel}>
    <header className="site-header">
      <button className="brand-button" onClick={() => goTo(0)} aria-label={t.common.home}><Brand compact language={language} /></button>
      <nav aria-label={t.common.navigation}>{t.nav.map((item, index) => <button key={item} className={active === index ? "active" : ""} onClick={() => goTo(index)}><span>{String(index + 1).padStart(2, "0")}</span>{item}</button>)}</nav>
      <div className="header-actions"><button className="language-toggle" onClick={() => setLanguage(language === "ar" ? "en" : "ar")} aria-label={t.common.language}>{language === "ar" ? "EN" : "عربي"}</button><button className="header-cta" onClick={() => goTo(5)}>{t.common.start}</button></div>
    </header>

    <div className="slides-window" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => {
      if (touchStart.current === null) return;
      const distance = touchStart.current - event.changedTouches[0].clientX;
      if (Math.abs(distance) > 45) goTo(active + (distance > 0 ? 1 : -1));
      touchStart.current = null;
    }}>
      <div className="slides-track" style={{ transform: `translate3d(${(direction === "rtl" ? 1 : -1) * active * 100}%, 0, 0)` }}>
        <section className="slide hero-slide" aria-hidden={active !== 0}>
          <div className="hero-orbit" aria-hidden="true"><span /><span /><span /></div>
          <div className="hero-content"><p className="kicker"><span /> {t.hero.kicker}</p><h1>{t.hero.title}<br /><em>{t.hero.accent}</em></h1><p className="hero-text">{t.hero.text}</p><div className="hero-actions"><button className="primary-action" onClick={() => goTo(1)}>{t.hero.explore} <ArrowIcon /></button><button className="ghost-action" onClick={() => goTo(5)}>{t.hero.talk}</button></div></div>
          <div className="hero-brand" aria-label={t.hero.identity}><Brand language={language} /></div><div className="hero-index"><b>01</b><span>06</span></div>
        </section>

        <section className="slide services-slide" aria-hidden={active !== 1}>
          <div className="slide-heading"><p className="framed-label"><span /> {t.solutions.label} <span /></p><h2>{t.solutions.title}</h2><p>{t.solutions.intro}</p></div>
          <div className="services-grid">{t.solutions.items.map((service, index) => <article className="service-card" key={service.name}><div className="service-media"><img src={service.image} alt={service.alt} /><span>0{index + 1}</span></div><div className="service-copy"><small>{service.label}</small><h3>{service.name}</h3><p>{service.description}</p></div></article>)}</div>
        </section>

        <section className="slide catalog-slide" aria-hidden={active !== 2}>
          <div className="catalog-heading">
            <div><p className="framed-label light"><span /> {t.catalog.label} <span /></p><h2>{t.catalog.titleTop}<br />{t.catalog.titleBottom}</h2></div>
            <div className="catalog-switch" role="tablist" aria-label={t.catalog.choose}>
              {t.catalog.groups.map((group, index) => <button key={group.audience} role="tab" aria-selected={catalogAudience === index} className={catalogAudience === index ? "active" : ""} onClick={() => setCatalogAudience(index)}><span>0{index + 1}</span>{group.audience}</button>)}
            </div>
          </div>
          <div className={`catalog-showcase ${catalogAudience === 1 ? "business" : "individual"}`}>
            <aside className="catalog-aside"><span>0{catalogAudience + 1}</span><h3>{activeCatalog.audience}</h3><p>{activeCatalog.lead}</p><button onClick={() => goTo(5)}>{t.common.start} <ArrowIcon /></button></aside>
            <div className="service-options">{activeCatalog.items.map(([title, description], itemIndex) => <article className={activeCatalog.items.length === 5 && itemIndex > 2 ? "half" : ""} key={title}><b>{String(itemIndex + 1).padStart(2, "0")}</b><h3>{title}</h3><p>{description}</p></article>)}</div>
          </div>
        </section>

        <section className="slide proof-slide" aria-hidden={active !== 3}>
          <div className="proof-copy"><p className="framed-label light"><span /> {t.proof.label} <span /></p><h2>{t.proof.title}<br /><em>{t.proof.accent}</em></h2><p>{t.proof.text}</p><div className="facts-grid">{t.proof.facts.map(([value, label]) => <article key={`${value}-${label}`}><strong>{value}</strong><span>{label}</span></article>)}</div></div>
          <div className="proof-visual"><div className="dashboard-frame"><div className="frame-top"><span /><span /><span /><b>{t.proof.dashboard}</b></div><img src="/dashboard-preview.png" alt={t.proof.dashboardAlt} /></div><div className="proof-badge"><b>20</b><span>{t.proof.badge}<br />{t.proof.badgeSub}</span></div></div>
        </section>

        <section className="slide workflow-slide" aria-hidden={active !== 4}>
          <div className="slide-heading"><p className="framed-label"><span /> {t.workflow.label} <span /></p><h2>{t.workflow.title}</h2><p>{t.workflow.intro}</p></div>
          <div className="workflow-bridge" aria-label={t.workflow.bridgeLabel}>
            <strong>{t.workflow.bridgeTitle}</strong>
            <div>{t.workflow.bridge.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}</div>
          </div>
          <div className="workflow-grid">{t.workflow.steps.map(([number, title, description], index) => <article key={number}><span className="step-number">{number}</span><div className="step-dot" />{index < t.workflow.steps.length - 1 && <i aria-hidden="true" />}<h3>{title}</h3><p>{description}</p></article>)}</div>
        </section>

        <section className="slide contact-slide" aria-hidden={active !== 5}>
          <div className="contact-panel"><p className="framed-label light"><span /> {t.contact.label} <span /></p><h2>{t.contact.title}<br /><em>{t.contact.accent}</em></h2><p>{t.contact.text}</p><div className="contact-actions"><a className="whatsapp-action" href={whatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon /> {t.contact.whatsapp}</a><a className="mail-action" href={email}><MailIcon /> {t.contact.email}</a></div></div>
          <aside className="contact-summary"><Brand language={language} /><p>{t.contact.summary}</p><div className="summary-points">{t.contact.points.map((point) => <span key={point}>{point}</span>)}</div></aside>
          <footer><span>{t.contact.copyright}</span><b>{t.contact.certificate}</b></footer>
        </section>
      </div>
    </div>

    <div className="slide-controls" aria-label={t.controls.label}><button onClick={() => goTo(active - 1)} disabled={active === 0} aria-label={t.controls.previous}><ArrowIcon /></button><div>{t.nav.map((item, index) => <button key={item} className={active === index ? "active" : ""} onClick={() => goTo(index)} aria-label={`${t.controls.go} ${item}`} />)}</div><button onClick={() => goTo(active + 1)} disabled={active === TOTAL_SLIDES - 1} aria-label={t.controls.next}><ArrowIcon /></button></div>
  </main>;
}
