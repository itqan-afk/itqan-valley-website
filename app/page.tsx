"use client";

import { useEffect, useState } from "react";

type Language = "ar" | "en";


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
      titleTop: "خدمات مصممة لتحقيق هدفك",
      titleBottom: "",
      choose: "اختر فئة الخدمات",
      guarantee: "ضمان الجودة — نلتزم بالمخرجات المتفق عليها ونعدّل حتى رضاك.",
      trust: ["مخرجات بالعربية والإنجليزية", "نطاق ومخرجات ومدة واضحة", "موثّقون في منصة العمل الحر"],
      popular: "الأكثر طلباً",
      order: "اطلب عبر واتساب",
      groups: [
        {
          audience: "للأفراد",
          lead: "حضور مهني يعبّر عن خبرتك ويقوّي فرصك.",
          items: [
            ["سيرة ذاتية احترافية (ATS)", "سيرة احترافية متوافقة مع أنظمة الفرز ATS.", "من 179 ر.س"],
            ["تحسين ملف LinkedIn", "إعادة بناء LinkedIn ليعرض قيمتك المهنية بوضوح.", "من 179 ر.س"],
            ["خطاب تقديم وظيفي", "خطاب يربط خبرتك مباشرة بالفرصة المستهدفة.", "من 119 ر.س"],
            ["سيرة ذاتية تنفيذية", "سيرة تنفيذية تبرز الأثر والقرارات والإنجازات.", "من 349 ر.س"],
            ["تقييم ومراجعة السيرة", "تشخيص دقيق للسيرة مع توصيات قابلة للتطبيق.", "من 89 ر.س"],
            ["باقة التميز المهني", "سيرة باللغتين وLinkedIn وخطاب تقديم متكامل.", "من 549 ر.س"],
          ],
        },
        {
          audience: "للأعمال",
          lead: "أنظمة واضحة تربط القياس بالمسؤولية والقرار.",
          items: [
            ["باقة إدارة الأداء التنفيذي", "لوحة مؤشرات (KPIs) ومتابعة إجراءات وقالب تقرير تنفيذي جاهز.", "249 ر.س", "موصى به"],
            ["لوحة مؤشرات مخصصة", "تصميم مؤشرات ومستهدفات ولوحة متابعة تناسب إدارتك أو منشأتك.", "حسب النطاق"],
            ["نظام الاجتماعات والقرارات", "متابعة القرارات والمسؤولين والمواعيد والتصعيد حتى الإغلاق.", "حسب النطاق"],
            ["تصميم تقرير تنفيذي", "تحويل بياناتك إلى عرض قيادي مختصر وواضح يدعم القرار.", "حسب النطاق"],
            ["توثيق الإجراءات ومسارات العمل", "صياغة الإجراءات وتحديد الأدوار والاعتمادات ومخرجات كل مرحلة.", "حسب النطاق"],
          ],
        },
      ],
    },
    proof: {
      label: "أعمالنا بالأرقام",
      title: "خبرة موثّقة،",
      accent: "لا عبارات عامة.",
      text: "أرقام مستندة إلى نماذج وحلول تنفيذية بنيناها فعليًا، وتغطي التطوير المهني وقياس الأداء والجاهزية والتشغيل.",
      facts: [["34", "ملفًا احترافيًا"], ["16", "حلًا ونموذجًا"], ["11", "خدمة متخصصة"], ["16", "مؤشرًا متخصصًا"]],
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
      guarantee: "Quality guarantee — we deliver what's agreed and revise until you're satisfied.",
      trust: ["Arabic & English deliverables", "Clear scope, deliverables & timeline", "Documented on the Freelance platform"],
      popular: "Most requested",
      order: "Order via WhatsApp",
      groups: [
        {
          audience: "Individuals",
          lead: "A professional presence that represents your experience and strengthens your opportunities.",
          items: [
            ["Professional CV (ATS)", "Professional writing optimized for ATS screening.", "From SAR 179"],
            ["LinkedIn Profile Optimization", "A rebuilt profile that communicates your professional value.", "From SAR 179"],
            ["Cover Letter", "A tailored letter connecting your experience to the role.", "From SAR 119"],
            ["Executive CV", "An executive CV focused on impact, decisions, and results.", "From SAR 349"],
            ["CV Review", "A detailed diagnostic with practical recommendations.", "From SAR 89"],
            ["Career Excellence Bundle", "Bilingual CV, LinkedIn profile, and cover letter.", "From SAR 549"],
          ],
        },
        {
          audience: "Businesses",
          lead: "Clear systems that connect measurement, accountability, and decisions.",
          items: [
            ["Executive Performance Suite", "A KPI dashboard, action tracking, and a ready executive report template.", "SAR 249", "Recommended"],
            ["Custom KPI Dashboard", "Indicators, targets, and a tracking dashboard tailored to your unit.", "Scope-based"],
            ["Meetings & Decisions System", "Track decisions, owners, deadlines, and escalation to closure.", "Scope-based"],
            ["Executive Report Design", "Turn your data into a concise, decision-ready leadership brief.", "Scope-based"],
            ["Process & Workflow Documentation", "Define procedures, roles, approvals, and each stage's outputs.", "Scope-based"],
          ],
        },
      ],
    },
    proof: {
      label: "Our Work in Numbers",
      title: "Documented expertise,",
      accent: "not broad claims.",
      text: "Numbers grounded in real executive models and solutions we have built across professional development, performance, readiness, and operations.",
      facts: [["34", "Professional profiles"], ["16", "Solutions & models"], ["11", "Specialized services"], ["16", "Specialized indicators"]],
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
  return <div className={`brand-lockup${compact ? " compact" : ""}`}><img src="/itqan-mark.png" alt={brand.alt} /><span className="brand-copy"><b>{brand.primary}</b><strong>{brand.secondary}</strong><small>{brand.tagline}</small></span></div>;
}

export default function Home() {
  const [catalogAudience, setCatalogAudience] = useState(0);
  const [language, setLanguage] = useState<Language>("ar");
  const t = content[language];
  const direction = language === "ar" ? "rtl" : "ltr";
  const activeCatalog = t.catalog.groups[catalogAudience];
  const whatsapp = `https://wa.me/966555365305?text=${encodeURIComponent(t.contact.whatsappMessage)}`;
  const email = `mailto:itqan@itqanvalley.com?subject=${encodeURIComponent(t.contact.emailSubject)}`;
  const anchors = ["#solutions", "#services", "#proof", "#workflow", "#contact"];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  return <main className={`site lang-${language}`} dir={direction}>
    <header className="site-header"><div className="wrap">
      <a className="brand-button" href="#top" aria-label={t.common.home}><Brand compact language={language} /></a>
      <nav className="site-nav" aria-label={t.common.navigation}>{t.nav.slice(1).map((item, i) => <a key={item} href={anchors[i]}>{item}</a>)}</nav>
      <div className="header-actions"><button className="language-toggle" onClick={() => setLanguage(language === "ar" ? "en" : "ar")} aria-label={t.common.language}>{language === "ar" ? "EN" : "عربي"}</button><a className="header-cta" href="#contact">{t.common.start}</a></div>
    </div></header>

    <section className="hero" id="top"><div className="wrap">
      <p className="eyebrow">{t.hero.kicker}</p>
      <h1>{t.hero.title} <em>{t.hero.accent}</em></h1>
      <p className="lead">{t.hero.text}</p>
      <div className="hero-cta"><a className="btn btn-primary" href="#services">{t.hero.explore} <ArrowIcon /></a><a className="btn btn-wa" href={whatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon /> {t.hero.talk}</a></div>
    </div></section>

    <section className="block light" id="solutions"><div className="wrap">
      <div className="sec-top"><p className="eyebrow">{t.solutions.label}</p><h2>{t.solutions.title}</h2><p>{t.solutions.intro}</p></div>
      <div className="sol-grid">{t.solutions.items.map((s) => <article className="sol" key={s.name}><div className="ph"><img src={s.image} alt={s.alt} /><b>{s.label}</b></div><div className="body"><small>{s.label}</small><h3>{s.name}</h3><p>{s.description}</p></div></article>)}</div>
    </div></section>

    <section className="block navy" id="services"><div className="wrap">
      <div className="sec-top"><p className="eyebrow">{t.catalog.label}</p><h2>{t.catalog.titleTop} {t.catalog.titleBottom}</h2><p>{t.catalog.choose}</p></div>
      <div className="svc-switch" role="tablist" aria-label={t.catalog.choose}>{t.catalog.groups.map((g, i) => <button key={g.audience} role="tab" aria-selected={catalogAudience === i} className={catalogAudience === i ? "on" : ""} onClick={() => setCatalogAudience(i)}>{g.audience}</button>)}</div>
      <div className="cards">{activeCatalog.items.map(([title, description, price, rec], i) => <article className={i === 0 || rec ? "pc pc-feat" : "pc"} key={title}>{i === 0 || rec ? <span className="pc-best">{rec || t.catalog.popular}</span> : null}<span className="pc-cat">{activeCatalog.audience}</span><h3>{title}</h3><p>{description}</p><div className="pc-foot"><span className="pc-price">{price}</span><a className="pc-go" href={whatsapp} target="_blank" rel="noreferrer">{t.catalog.order} ↗</a></div></article>)}</div>
      <div className="guar"><div className="gt"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V5z" /><path d="M9 12l2 2 4-4" /></svg>{t.catalog.guarantee}</div><div className="gc">{t.catalog.trust.map((x) => <span key={x}>{x}</span>)}</div></div>
    </div></section>

    <section className="block light" id="proof"><div className="wrap">
      <div className="proof-grid">
        <div><p className="eyebrow">{t.proof.label}</p><h2 className="proof-h">{t.proof.title} <em>{t.proof.accent}</em></h2><p className="proof-text">{t.proof.text}</p><div className="facts">{t.proof.facts.map(([value, label]) => <article key={`${value}-${label}`}><strong>{value}</strong><span>{label}</span></article>)}</div></div>
        <div className="dash"><div className="frame"><div className="bar"><i /><i /><i /></div><img src="/dashboard-preview.png" alt={t.proof.dashboardAlt} /></div><div className="badge"><b>20</b><span>{t.proof.badge} {t.proof.badgeSub}</span></div></div>
      </div>
    </div></section>

    <section className="block alt" id="workflow"><div className="wrap">
      <div className="sec-top"><p className="eyebrow">{t.workflow.label}</p><h2>{t.workflow.title}</h2><p>{t.workflow.intro}</p></div>
      <div className="bridge">{t.workflow.bridge.map((x) => <span key={x}>{x}</span>)}</div>
      <div className="steps">{t.workflow.steps.map(([number, title, description]) => <article className="step" key={number}><b>{number}</b><h4>{title}</h4><p>{description}</p></article>)}</div>
    </div></section>

    <section className="block navy" id="contact"><div className="wrap">
      <div className="contact">
        <div><p className="eyebrow">{t.contact.label}</p><h2 className="contact-h">{t.contact.title} <em>{t.contact.accent}</em></h2><p className="contact-text">{t.contact.text}</p><div className="contact-cta"><a className="btn btn-wa" href={whatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon /> {t.contact.whatsapp}</a><a className="btn btn-ghost" href={email}><MailIcon /> {t.contact.email}</a></div></div>
        <aside className="contact-card"><Brand language={language} /><p>{t.contact.summary}</p><div className="pts">{t.contact.points.map((point) => <span key={point}>{point}</span>)}</div></aside>
      </div>
    </div></section>

    <footer className="foot"><div className="wrap"><span>{t.contact.copyright}</span><span>{t.contact.certificate}</span></div></footer>
  </main>;
}
