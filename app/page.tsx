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

const productFeatures = [
  "لوحة أداء تنفيذية عربية وإنجليزية",
  "سجل مؤشرات ومستهدفات وحدود وأوزان",
  "حساب تلقائي للحالة والإنجاز والانحراف",
  "متابعة الإجراءات والملاك والمواعيد والأدلة",
  "قالب تقرير تنفيذي من 6 شرائح باللغتين",
  "دليل تشغيل وترخيص ثنائي اللغة",
];

const workflow = [
  ["01", "عرّف المؤشرات", "حدد التعريف والوحدة والمالك والمستهدف وحدود التنبيه."],
  ["02", "أدخل النتائج", "حدّث النتائج الفعلية الشهرية في الخلايا المخصصة للإدخال."],
  ["03", "اقرأ الحالة", "راجع الحالة المحسوبة تلقائيًا والانحراف واتجاه الأداء."],
  ["04", "عيّن الإجراء", "اربط كل استثناء بمالك وموعد ودليل إغلاق واضح."],
  ["05", "ارفع القرار", "حوّل النتائج إلى تقرير مختصر وقرارات قابلة للاعتماد."],
];

const services = [
  { number: "01", title: "الحزم الرقمية", text: "قوالب وأنظمة تشغيل جاهزة تساعد المنشآت على تنظيم العمل والقياس والمتابعة." },
  { number: "02", title: "التخصيص المؤسسي", text: "تخصيص الهوية والمؤشرات والتقارير وآليات المتابعة وفق احتياج المنشأة." },
  { number: "03", title: "حلول التطوير", text: "تحويل الإجراءات المتفرقة إلى مسارات واضحة، ومسؤوليات محددة، ومخرجات قابلة للقياس." },
];

const faqs = [
  ["هل الملفات قابلة للتعديل؟", "نعم. جميع ملفات Excel وPowerPoint قابلة للتعديل الداخلي وفق شروط الترخيص."],
  ["هل تحتاج الحزمة إلى برامج خاصة؟", "تعمل باستخدام Microsoft Excel وPowerPoint، ولا تعتمد على وحدات ماكرو. يُنصح باستخدام إصدار حديث والتحقق من التوافق قبل الاستخدام الرسمي."],
  ["هل البيانات الموجودة حقيقية؟", "لا. البيانات المرفقة تجريبية لشرح طريقة العمل، ويجب استبدالها والتحقق من التعريفات والصيغ قبل الاعتماد."],
  ["هل يشمل السعر خدمة التخصيص؟", "لا. الحزمة منتج جاهز، بينما تخصيص الهوية والمؤشرات والتقارير خدمة مستقلة تُسعّر حسب النطاق."],
  ["هل يمكن إعادة بيع الملفات؟", "لا. الترخيص للاستخدام الداخلي لمشترٍ واحد داخل منشأة واحدة، ويمنع إعادة البيع أو الترخيص من الباطن أو التوزيع العام."],
];

export default function Home() {
  return (
    <main dir="rtl">
      <nav className="nav-shell" aria-label="التنقل الرئيسي">
        <a className="brand" href="#top" aria-label="إتقان فالي - الرئيسية">
          <img src="/itqan-icon.svg" alt="" />
          <span><b>إتقان فالي</b><small>حلول الأعمال والتطوير</small></span>
        </a>
        <div className="nav-links">
          <a href="#product">المنتج</a><a href="#workflow">كيف يعمل؟</a><a href="#services">خدماتنا</a><a href="#faq">الأسئلة الشائعة</a>
        </div>
        <a className="nav-cta" href="#purchase">اطلب الحزمة</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> حلول عملية لتنظيم الأداء والتشغيل</p>
          <h1>نحوّل أعمالك إلى أنظمة<br /><em>أكثر وضوحًا وكفاءة.</em></h1>
          <p className="hero-lead">منتجات رقمية وخدمات تطوير مصممة للمنشآت التي تريد متابعة أفضل، قرارات أسرع، وتنفيذًا يمكن قياسه.</p>
          <div className="hero-actions"><a className="button primary" href="#product">استكشف المنتج <Arrow /></a><a className="button secondary" href="#services">عرض الخدمات</a></div>
          <div className="trust-row"><span><Check /> عربي أولًا</span><span><Check /> قابل للتعديل</span><span><Check /> جاهز للبدء</span></div>
        </div>
        <div className="hero-visual" aria-label="معاينة حزمة إدارة الأداء التنفيذي">
          <div className="visual-backdrop" /><img src="/product-cover.png" alt="غلاف حزمة إدارة الأداء التنفيذي من إتقان فالي" />
          <div className="floating-card card-one"><b>10</b><span>مؤشرات نشطة</span></div><div className="floating-card card-two"><b>90%</b><span>مستهدف واضح</span></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="مزايا مختصرة"><p>من المؤشر</p><span>←</span><p>إلى التحليل</p><span>←</span><p>إلى الإجراء</p><span>←</span><p>إلى القرار</p></section>

      <section className="section product-section" id="product">
        <div className="section-heading"><div><p className="eyebrow dark"><span /> المنتج الأول</p><h2>حزمة إدارة الأداء التنفيذي</h2></div><p>نقطة بداية منظمة تجمع المؤشرات والنتائج والإجراءات والتقرير التنفيذي في دورة عمل واحدة.</p></div>
        <div className="product-grid">
          <div className="product-gallery"><img src="/dashboard-preview.png" alt="معاينة لوحة الأداء التنفيذية" /><div className="file-badges"><span>Excel</span><span>PowerPoint</span><span>عربي</span><span>English</span></div></div>
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
        <div className="section-heading"><div><p className="eyebrow"><span /> ما نقدمه</p><h2>حلول تبدأ بمنتج<br />وتكبر مع احتياجك</h2></div><p>نبني أدوات قابلة للاستخدام، ثم نخصصها ونطوّرها لتناسب واقع التشغيل داخل المنشأة.</p></div>
        <div className="services-grid">{services.map((service) => <article key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><a href="#order">اعرف المزيد <Arrow /></a></article>)}</div>
      </section>

      <section className="section comparison-section">
        <div className="comparison-copy"><p className="eyebrow dark"><span /> القيمة العملية</p><h2>ليست لوحة أرقام فقط</h2><p>الحزمة تربط القياس بالمسؤولية، وتمنح الإدارة صورة مختصرة يمكن أن تتحول مباشرة إلى إجراء وقرار.</p><div className="metric"><strong>4</strong><span>طبقات مترابطة<br />مؤشر • نتيجة • إجراء • قرار</span></div></div>
        <div className="comparison-cards"><article className="muted-card"><small>قبل</small><h3>ملفات متفرقة</h3><p>تعريفات مختلفة، متابعة يدوية، ومسؤوليات غير واضحة.</p></article><article className="accent-card"><small>بعد</small><h3>دورة إدارية واحدة</h3><p>بيانات موحدة، حالة واضحة، وإجراء يمكن متابعته حتى الإغلاق.</p></article></div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading centered"><p className="eyebrow dark"><span /> قبل الشراء</p><h2>أسئلة شائعة</h2></div>
        <div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </section>

      <section className="order-section" id="order">
        <div><p className="eyebrow"><span /> ابدأ بخطوة واضحة</p><h2>جهّز دورة الأداء القادمة<br />بأسلوب أكثر إتقانًا.</h2></div>
        <div className="order-card"><p>الحزمة جاهزة للرفع في متجرك الرقمي. استخدم قناة المتجر الرسمية لإتمام الطلب والتسليم والدعم.</p><a className="button light" href="#purchase">عرض تفاصيل الحزمة <Arrow /></a><small>التخصيص المؤسسي متاح كخدمة منفصلة حسب النطاق.</small></div>
      </section>

      <footer>
        <div className="brand footer-brand"><img src="/itqan-icon.svg" alt="" /><span><b>إتقان فالي</b><small>Business Solutions &amp; Development</small></span></div>
        <p>منتجات رقمية وحلول تطوير تمنح الأعمال وضوحًا أكبر وكفاءة أعلى.</p><div><a href="#product">المنتج</a><a href="#services">الخدمات</a><a href="#faq">الأسئلة الشائعة</a></div><small>© 2026 إتقان فالي. جميع الحقوق محفوظة.</small>
      </footer>
    </main>
  );
}
