const Check = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="check-icon">
    <path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow-icon">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WhatsApp = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="contact-icon">
    <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 8.4c.2-.5.4-.5.7-.5h.4c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.1.4 0 .6.5 1 1.4 1.8 2.4 2.3.2.1.4.2.6 0l.8-1c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .3-.1 1.3-.7 1.8-.5.5-1.4.8-2.3.6-1-.2-2.4-.7-4.1-2.2-1.4-1.3-2.4-2.8-2.7-3.8-.3-.9 0-1.8.4-2.4Z" fill="currentColor" />
  </svg>
);

const Mail = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="contact-icon">
    <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const whatsappUrl = "https://wa.me/966555365305?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20%D8%A5%D8%AA%D9%82%D8%A7%D9%86%20%D9%81%D8%A7%D9%84%D9%8A%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85.";
const emailUrl = "mailto:hello.Itqan@gmail.com?subject=%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A5%D8%AA%D9%82%D8%A7%D9%86%20%D9%81%D8%A7%D9%84%D9%8A";

const productFeatures = [
  "لوحة أداء تنفيذية عربية وإنجليزية",
  "سجل مؤشرات ومستهدفات وحدود وأوزان",
  "حساب تلقائي للحالة والإنجاز والانحراف",
  "متابعة الإجراءات والملاك والمواعيد والأدلة",
  "قالب تقرير تنفيذي من 6 شرائح باللغتين",
  "دليل تشغيل وترخيص ثنائي اللغة",
];

const careerProducts = [
  { tag: "الأكثر طلبًا", title: "سيرة ذاتية ATS", text: "صياغة احترافية متوافقة مع أنظمة الفرز، بالعربية أو الإنجليزية.", price: "ابتداءً من 179 ر.س", code: "CV" },
  { tag: "حضور مهني", title: "تحسين ملف LinkedIn", text: "عنوان وملخص وخبرات ومهارات تعكس قيمتك المهنية بوضوح.", price: "ابتداءً من 179 ر.س", code: "IN" },
  { tag: "تقديم أقوى", title: "خطاب تقديم وظيفي", text: "خطاب مخصص يربط خبراتك بمتطلبات الوظيفة المستهدفة.", price: "ابتداءً من 119 ر.س", code: "CL" },
  { tag: "للقيادات", title: "سيرة ذاتية تنفيذية", text: "سيرة تبرز الأثر والقيادة والإنجازات وصناعة القرار.", price: "ابتداءً من 349 ر.س", code: "EX" },
  { tag: "مراجعة", title: "تقييم السيرة الحالية", text: "مراجعة المحتوى والهيكل والكلمات المفتاحية مع توصيات عملية.", price: "ابتداءً من 89 ر.س", code: "RV" },
  { tag: "باقة", title: "التميز المهني", text: "سيرة عربية وإنجليزية، LinkedIn، وخطاب تقديم ضمن باقة واحدة.", price: "ابتداءً من 549 ر.س", code: "PK" },
];

const businessProducts = [
  { tag: "منتج رقمي", title: "باقة إدارة الأداء التنفيذي", text: "لوحة مؤشرات، متابعة إجراءات، وقالب تقرير تنفيذي بالعربية والإنجليزية.", price: "249 ر.س", code: "KPI" },
  { tag: "خدمة تخصيص", title: "لوحة مؤشرات مخصصة", text: "تصميم مؤشرات ومستهدفات ولوحة متابعة تناسب إدارة أو منشأة محددة.", price: "حسب النطاق", code: "DB" },
  { tag: "مكتب تنفيذي", title: "نظام الاجتماعات والقرارات", text: "متابعة القرارات والملاك والمواعيد والتصعيد حتى الإغلاق.", price: "حسب النطاق", code: "EO" },
  { tag: "العقود", title: "متابع العقود والمشتريات", text: "أداة منظمة لمتابعة المنافسات والعقود والتجديدات والتغييرات والموردين.", price: "حسب النطاق", code: "CT" },
  { tag: "تقارير", title: "تصميم تقرير تنفيذي", text: "تحويل البيانات والمستجدات إلى عرض قيادي مختصر وواضح للقرار.", price: "حسب النطاق", code: "RP" },
  { tag: "تشغيل", title: "توثيق الإجراءات ومسارات العمل", text: "صياغة إجراءات عملية وتحديد الأدوار ونقاط الاعتماد ومخرجات كل مرحلة.", price: "حسب النطاق", code: "SOP" },
];

const workflow = [
  ["01", "عرّف المؤشرات", "حدد التعريف والوحدة والمالك والمستهدف وحدود التنبيه."],
  ["02", "أدخل النتائج", "حدّث النتائج الفعلية الشهرية في الخلايا المخصصة للإدخال."],
  ["03", "اقرأ الحالة", "راجع الحالة المحسوبة تلقائيًا والانحراف واتجاه الأداء."],
  ["04", "عيّن الإجراء", "اربط كل استثناء بمالك وموعد ودليل إغلاق واضح."],
  ["05", "ارفع القرار", "حوّل النتائج إلى تقرير مختصر وقرارات قابلة للاعتماد."],
];

const services = [
  { number: "01", title: "الخدمات المهنية", text: "سير ذاتية وملفات LinkedIn وخطابات تُصاغ وفق خبرتك والفرصة المستهدفة." },
  { number: "02", title: "المنتجات الرقمية", text: "قوالب وباقات جاهزة تساعد المهنيين والمنشآت على التنظيم والقياس والمتابعة." },
  { number: "03", title: "حلول الأعمال المخصصة", text: "لوحات وتقارير وإجراءات ومسارات عمل تُبنى وفق واقع الإدارة أو المنشأة." },
];

const faqs = [
  ["من تخدم إتقان فالي؟", "نخدم الباحثين عن فرص وظيفية، والموظفين الراغبين في تطوير حضورهم المهني، وأصحاب الأعمال والمنشآت التي تحتاج أدوات متابعة وتقارير وحلول تشغيل واضحة."],
  ["هل الخدمات المهنية مخصصة لكل عميل؟", "نعم. السيرة الذاتية وLinkedIn والخطابات تُبنى وفق خبرة العميل والوظيفة المستهدفة، وليست نصوصًا عامة جاهزة."],
  ["هل الملفات قابلة للتعديل؟", "نعم. جميع ملفات Excel وPowerPoint قابلة للتعديل الداخلي وفق شروط الترخيص."],
  ["هل تحتاج الباقة إلى برامج خاصة؟", "تعمل باستخدام Microsoft Excel وPowerPoint، ولا تعتمد على وحدات ماكرو. يُنصح باستخدام إصدار حديث والتحقق من التوافق قبل الاستخدام الرسمي."],
  ["هل البيانات الموجودة حقيقية؟", "لا. البيانات المرفقة تجريبية لشرح طريقة العمل، ويجب استبدالها والتحقق من التعريفات والصيغ قبل الاعتماد."],
  ["هل يشمل السعر خدمة التخصيص؟", "لا. الباقة منتج جاهز، بينما تخصيص الهوية والمؤشرات والتقارير خدمة مستقلة تُسعّر حسب النطاق."],
  ["هل يمكن إعادة بيع الملفات؟", "لا. الترخيص للاستخدام الداخلي لمشترٍ واحد داخل منشأة واحدة، ويمنع إعادة البيع أو الترخيص من الباطن أو التوزيع العام."],
];

function ProductCard({ item, audience }: { item: { tag: string; title: string; text: string; price: string; code: string }; audience: "career" | "business" }) {
  return (
    <article className={`catalog-card ${audience}`}>
      <div className="catalog-top"><span>{item.tag}</span><b>{item.code}</b></div>
      <h3>{item.title}</h3><p>{item.text}</p>
      <div className="catalog-bottom"><strong>{item.price}</strong><a href="#order">اطلب الخدمة <Arrow /></a></div>
    </article>
  );
}

export default function Home() {
  return (
    <main dir="rtl">
      <nav className="nav-shell" aria-label="التنقل الرئيسي">
        <a className="brand" href="#top" aria-label="إتقان فالي - الرئيسية">
          <img src="/itqan-icon.svg" alt="" />
          <span><b>إتقان فالي</b><small>حلول الأعمال والتطوير</small></span>
        </a>
        <div className="nav-links">
          <a href="#career">للأفراد</a><a href="#business">للأعمال</a><a href="#packages">الباقات</a><a href="#services">خدماتنا</a><a href="#faq">الأسئلة الشائعة</a>
        </div>
        <a className="nav-cta" href="#order">ابدأ طلبك</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> تطوير مهني وحلول أعمال تحت سقف واحد</p>
          <h1>نتقن حضورك المهني<br /><em>ونطوّر طريقة عملك.</em></h1>
          <p className="hero-lead">خدمات للباحثين عن الوظائف والموظفين، ومنتجات وحلول لأصحاب الأعمال والمنشآت—من السيرة الذاتية إلى أنظمة الأداء والتشغيل.</p>
          <div className="hero-actions"><a className="button primary" href="#career">خدمات الأفراد <Arrow /></a><a className="button secondary" href="#business">حلول الأعمال</a></div>
          <div className="trust-row"><span><Check /> خدمة مخصصة</span><span><Check /> منتجات جاهزة</span><span><Check /> تنفيذ باحتراف</span></div>
        </div>
        <div className="hero-visual" aria-label="باقات إتقان فالي">
          <div className="visual-backdrop" />
          <div className="hero-packages">
            <a className="hero-package epm" href="#product"><div className="package-code"><span>KPI</span><small>IV-EPM-001</small></div><h2>باقة إدارة الأداء التنفيذي</h2><p>لوحة مؤشرات ومتابعة إجراءات وتقرير تنفيذي.</p><b>249 ر.س</b></a>
            <a className="hero-package career" href="#packages"><div className="package-code"><span>CV</span><small>للباحث عن عمل</small></div><h2>باقة البداية المهنية</h2><p>سيرة ATS وخطاب تقديم وجولة تعديلات.</p><b>ابتداءً من 269 ر.س</b></a>
            <a className="hero-package professional" href="#packages"><div className="package-code"><span>PRO</span><small>الأكثر تكاملًا</small></div><h2>باقة الحضور المهني</h2><p>سيرة باللغتين وLinkedIn وخطاب مخصص.</p><b>ابتداءً من 549 ر.س</b></a>
            <a className="hero-package business" href="#packages"><div className="package-code"><span>OPS</span><small>للمنشآت</small></div><h2>باقة الانطلاقة الإدارية</h2><p>مؤشرات وقرارات وقالب تقرير تنفيذي.</p><b>حسب النطاق</b></a>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="الفئات المستهدفة"><p>للباحثين عن عمل</p><span>•</span><p>للموظفين والمهنيين</p><span>•</span><p>لأصحاب الأعمال</p><span>•</span><p>للمنشآت والإدارات</p></section>

      <section className="section catalog-section career-catalog" id="career">
        <div className="section-heading"><div><p className="eyebrow dark"><span /> للأفراد والمهنيين</p><h2>خدمات تبني حضورك<br />وتقوّي فرصك المهنية</h2></div><p>نصيغ أدواتك المهنية بما يعكس خبرتك الحقيقية ويخاطب الوظيفة أو المرحلة التي تستهدفها.</p></div>
        <div className="catalog-grid">{careerProducts.map((item) => <ProductCard key={item.title} item={item} audience="career" />)}</div>
      </section>

      <section className="section catalog-section business-catalog" id="business">
        <div className="section-heading"><div><p className="eyebrow"><span /> لأصحاب الأعمال والمنشآت</p><h2>أدوات وحلول تجعل<br />التشغيل أكثر وضوحًا</h2></div><p>منتجات جاهزة وخدمات تخصيص تربط البيانات بالمسؤولية والإجراء والقرار.</p></div>
        <div className="catalog-grid">{businessProducts.map((item) => <ProductCard key={item.title} item={item} audience="business" />)}</div>
      </section>

      <section className="section packages-section" id="packages">
        <div className="section-heading centered"><p className="eyebrow dark"><span /> قيمة أكبر في طلب واحد</p><h2>باقات تناسب مرحلتك</h2><p>ابدأ بالخدمة التي تحتاجها الآن، أو اختر باقة تجمع المخرجات الأساسية بسعر أوضح.</p></div>
        <div className="packages-grid">
          <article><small>للباحث عن عمل</small><h3>باقة البداية المهنية</h3><ul><li><Check />سيرة ATS بلغة واحدة</li><li><Check />خطاب تقديم وظيفي</li><li><Check />جولة تعديلات واحدة</li></ul><strong>ابتداءً من 269 ر.س</strong><a href="#order">اختر الباقة <Arrow /></a></article>
          <article className="featured"><span>الأكثر تكاملًا</span><small>للموظف والمهني</small><h3>باقة الحضور المهني</h3><ul><li><Check />سيرة عربية وإنجليزية</li><li><Check />تحسين LinkedIn</li><li><Check />خطاب تقديم مخصص</li></ul><strong>ابتداءً من 549 ر.س</strong><a href="#order">اختر الباقة <Arrow /></a></article>
          <article><small>للمنشأة والإدارة</small><h3>باقة الانطلاقة الإدارية</h3><ul><li><Check />لوحة مؤشرات أساسية</li><li><Check />متابع اجتماعات وقرارات</li><li><Check />قالب تقرير تنفيذي</li></ul><strong>يحدد حسب النطاق</strong><a href="#order">اطلب عرضًا <Arrow /></a></article>
        </div>
      </section>

      <section className="section product-section" id="product">
        <div className="section-heading"><div><p className="eyebrow dark"><span /> منتج مميز للأعمال</p><h2>باقة إدارة الأداء التنفيذي</h2></div><p>نقطة بداية منظمة تجمع المؤشرات والنتائج والإجراءات والتقرير التنفيذي في دورة عمل واحدة.</p></div>
        <div className="product-grid">
          <div className="product-gallery"><div className="dashboard-shell"><div className="dashboard-title">لوحة الأداء التنفيذية | إتقان فالي</div><img src="/dashboard-preview.png" alt="معاينة لوحة الأداء التنفيذية" /></div><div className="file-badges"><span>Excel</span><span>PowerPoint</span><span>عربي</span><span>English</span></div></div>
          <div className="product-details">
            <p className="sku">IV-EPM-001</p><h3>متابعة واضحة بدل الملفات المتفرقة</h3><p>عرّف مؤشراتك، أدخل النتائج، اكتشف الاستثناءات، تابع الإجراء، وارفع القرار باستخدام ملفات مهنية جاهزة للتخصيص.</p>
            <ul>{productFeatures.map((item) => <li key={item}><Check />{item}</li>)}</ul>
            <div className="price-box" id="purchase"><div><small>سعر الإطلاق المقترح</small><strong>249 <span>ر.س</span></strong><del>299 ر.س</del></div><a className="button primary" href="#order">اطلبها عبر المتجر <Arrow /></a></div>
            <p className="license-note">ترخيص استخدام داخلي لمنشأة واحدة • بدون ماكرو • بيانات تجريبية قابلة للاستبدال</p>
          </div>
        </div>
      </section>

      <section className="section workflow-section" id="workflow">
        <div className="section-heading centered"><p className="eyebrow dark"><span /> دورة عمل شهرية</p><h2>خمس خطوات من البيانات إلى القرار</h2><p>مسار بسيط يساعد الفريق على الحفاظ على الانضباط والوضوح من دون تعقيد تقني.</p></div>
        <div className="workflow-grid">{workflow.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading"><div><p className="eyebrow"><span /> طريقة خدمتنا</p><h2>من خدمة فردية<br />إلى حل متكامل</h2></div><p>نقدم مخرجات مخصصة للأفراد، ومنتجات جاهزة للأعمال، وخدمات تطوير تتوسع مع الاحتياج.</p></div>
        <div className="services-grid">{services.map((service) => <article key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><a href="#order">اعرف المزيد <Arrow /></a></article>)}</div>
      </section>

      <section className="section comparison-section">
        <div className="comparison-copy"><p className="eyebrow dark"><span /> القيمة العملية</p><h2>ليست لوحة أرقام فقط</h2><p>الباقة تربط القياس بالمسؤولية، وتمنح الإدارة صورة مختصرة يمكن أن تتحول مباشرة إلى إجراء وقرار.</p><div className="metric"><strong>4</strong><span>طبقات مترابطة<br />مؤشر • نتيجة • إجراء • قرار</span></div></div>
        <div className="comparison-cards"><article className="muted-card"><small>قبل</small><h3>ملفات متفرقة</h3><p>تعريفات مختلفة، متابعة يدوية، ومسؤوليات غير واضحة.</p></article><article className="accent-card"><small>بعد</small><h3>دورة إدارية واحدة</h3><p>بيانات موحدة، حالة واضحة، وإجراء يمكن متابعته حتى الإغلاق.</p></article></div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading centered"><p className="eyebrow dark"><span /> قبل الشراء</p><h2>أسئلة شائعة</h2></div>
        <div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </section>

      <section className="order-section" id="order">
        <div><p className="eyebrow"><span /> اختر المسار المناسب</p><h2>فرص مهنية أقوى<br />وأعمال أكثر إتقانًا.</h2></div>
        <div className="order-card"><p>حدد الخدمة أو الباقة المناسبة، وتواصل معنا لتأكيد نطاق العمل والمتطلبات ومدة التسليم قبل البدء.</p><div className="order-links"><a className="button whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsApp /> تواصل عبر واتساب</a><a className="button secondary" href={emailUrl}><Mail /> راسلنا بالبريد</a></div><small>نرد على استفسارات الأفراد وأصحاب الأعمال ونساعدك في اختيار الخدمة المناسبة.</small></div>
      </section>

      <footer>
        <div className="brand footer-brand"><img src="/itqan-icon.svg" alt="" /><span><b>إتقان فالي</b><small>Business Solutions &amp; Development</small></span></div>
        <p>خدمات تطوير مهني للأفراد، ومنتجات وحلول تنظيم وتشغيل لأصحاب الأعمال والمنشآت.</p>
        <div className="footer-links"><a href="#career">للأفراد</a><a href="#business">للأعمال</a><a href="#packages">الباقات</a><a href="#faq">الأسئلة الشائعة</a></div>
        <div className="footer-contact" aria-label="بيانات التواصل">
          <strong>تواصل معنا</strong>
          <a href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsApp /><span dir="ltr">+966 55 536 5305</span></a>
          <a href={emailUrl}><Mail /><span dir="ltr">hello.Itqan@gmail.com</span></a>
        </div>
        <div className="footer-legal"><span>رقم شهادة العمل الحر: <b dir="ltr">FL-291569463</b></span><small>© 2026 إتقان فالي. جميع الحقوق محفوظة.</small></div>
      </footer>
    </main>
  );
}
