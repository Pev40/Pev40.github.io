/**
 * i18n ligero para GitHub Pages (sin framework).
 * Preferencia: localStorage "portfolio-lang" | detección del navegador | "es".
 */
(function () {
  const STORAGE_KEY = "portfolio-lang";

  const STRINGS = {
    en: {
      _meta_home: "Piero Vizcarra | Data Engineer",
      _meta_exp: "Piero Vizcarra | Experience & Career",
      _meta_proj: "Piero Vizcarra | Featured Projects",

      nav_brand: "> DATA_ENGINEER",
      nav_home: "Home",
      nav_about: "About",
      nav_projects: "Projects",
      nav_exp: "Experience",
      nav_skills: "Skills",

      home_hero_status: "STATUS: PIPELINE_ACTIVE",
      home_hero_latlon: "LAT: -16.4090 / LON: -71.5375",
      home_hero_h1_a: "PIERO VIZCARRA:",
      home_hero_h1_b: "Architecting",
      home_hero_h1_c: "Data Pipelines",
      home_hero_subtitle_html:
        'Cloud Data Engineer specializing in <span class="text-on-surface font-semibold underline decoration-primary-light decoration-2 underline-offset-4">Medallion Architecture</span>. Building robust, scalable systems on AWS, GCP, and Azure.',
      home_hero_cta_contact: "Contact Me",
      home_hero_cta_projects: "Explore Projects",
      home_scroll: "Scroll",

      home_about_badge: "ABOUT_ME",
      home_about_title: "Engineer",
      home_about_subtitle: "of Data",
      home_about_p1: "Computer Science student at the National University of San Agustin (UNSA) in Arequipa, Peru (2020-2025). Passionate about data engineering, cloud architecture, and building scalable data solutions.",
      home_about_p2: "With 4+ years building production ETL/ELT pipelines, Medallion architectures, and scalable cloud infrastructure on AWS, GCP, and Azure. Expert in Python, PySpark, SQL, Kafka, and Kubernetes with IAM governance, CI/CD, and data quality focus.",
      home_about_unsa: "B.S. Computer Science @ UNSA Arequipa | Microsoft DP-700 & AWS Certified",

      home_tech_title: "Tech Stack",
      home_tech_desc: "Languages, frameworks, and tools I use to architect and deploy data solutions.",
      home_tech_languages: "Languages",
      home_tech_cloud: "Cloud & Infrastructure",
      home_tech_data: "Data & Big Data",
      home_tech_tools: "Tools & DevOps",

      home_stat_uptime_lbl: "Pipeline Uptime & Reliability",
      home_stat_etl_lbl: "ETL Architectures",
      home_stat_data_lbl: "Data Processed (PB)",

      home_featured_title: "Featured Projects",
      home_featured_desc: "A selection of my most impactful and technically interesting projects. Visit my GitHub for the complete portfolio.",
      home_featured_cta: "Ver repo",
      home_feat_p1_title: "ECGMAMBA-XAI",
      home_feat_p1_desc: "ML model for ECG analysis with explainable AI. Python, TensorFlow, MAMBA architecture.",
      home_feat_p2_title: "Extracta-Finanzas",
      home_feat_p2_desc: "Financial data extraction and ETL pipeline. Python, APIs, Data Processing.",
      home_feat_p3_title: "Distributed Attendance System",
      home_feat_p3_desc: "Kafka + AWS + Kubernetes distributed system for real-time video stream processing and facial recognition.",
      home_feat_cta: "View Repo",
      home_feat_all: "View All Projects",

      home_location_title: "Operational Base",
      home_location_body:
        "Based in <span class=\"text-on-surface font-semibold\">Arequipa, Peru</span>. Leveraging global cloud infrastructure with local precision and technical focus.",
      home_location_coords: "AREQUIPA // 16.4090° S, 71.5375° W",
      home_footer_brand: "KINETIC_PIPELINE",
      home_footer_copy: "Portfolio",

      exp_badge: "SYSTEM_STATUS: OPERATIONAL",
      exp_h2_a: "CAREER",
      exp_h2_b: "PIPELINE",
      exp_intro:
        "Architecting robust data flows and cloud infrastructure. A chronological view of milestones and certifications.",
      exp_t1_date: "JUN 2025 - PRESENT",
      exp_t1_role: "Cloud Data Engineer",
      exp_t1_company: "@ Growth Strategy (Remote)",
      exp_t1_badge: "CURRENT",
      exp_t1_desc:
        "Design end-to-end ETL/ELT pipelines on Azure for multiple clients (MeedoSweet, Gamao, Rafe Group), reducing data preparation time for BI by ~60%. Implement Medallion architecture (Bronze→Silver→Gold), lead Microsoft Fabric migrations, automate critical operational flows, and execute Snowflake→Databricks migrations with dbt. Implement data lineage and Microsoft Purview integration.",
      exp_t2_date: "JAN 2025 - DEC 2025",
      exp_t2_role: "Data Engineer",
      exp_t2_company: "@ Sociedad de Beneficencia de Arequipa (Hybrid)",
      exp_t2_desc:
        "Led migration of legacy systems to Google Cloud under ISO 27000 compliance, achieving 99.5% availability. Executed complete AWS migration (EC2, S3, Route53, SES) and implemented IAM/RBAC access controls. Designed Power BI dashboards for self-service analytics. Optimized critical queries in PostgreSQL and SQL Server for high-volume reporting.",
      exp_t3_date: "JAN 2024 - DEC 2024",
      exp_t3_role: "Software Engineer",
      exp_t3_company: "@ Sociedad de Beneficencia (On-site)",
      exp_t3_desc:
        "Integrated heterogeneous data sources with Python ETL scripts and REST APIs for report consolidation. Automated CI/CD pipelines with Jenkins and Git. Optimized critical queries in PostgreSQL and SQL Server for reporting, significantly reducing execution times.",
      exp_sys_info: "SYSTEM_INFO",
      exp_sys_user: "> USER: PIERO_VIZCARRA",
      exp_sys_loc: "> LOC: AREQUIPA_PE",
      exp_sys_time: "> TIME: 2024.Q4.PIPELINE",
      exp_sys_uptime: "> UPTIME: 5+ YEARS_EXP",
      exp_cert_heading: "Certifications",
      exp_cert1_code: "Microsoft DP-700",
      exp_cert1_name: "Fabric Data Engineer Associate",
      exp_cert2_code: "AWS Cloud Foundations",
      exp_cert2_name: "AWS Certified Cloud Practitioner (+ Architecting)",
      exp_img_tag: "CORE_INFRA_VIEW",
      exp_footer_stable: "System stable",

      proj_repo_sync: "Repository sync: 100%",
      proj_h2_a: "FEATURED",
      proj_h2_b: "PIPELINES",
      proj_intro:
        "Scalable data environments. High-throughput ingestion, orchestration, and cloud-native warehousing.",
      proj_main_status: "ACTIVE",
      proj_main_metric_lbl: "Traffic metric",
      proj_main_metric_val: "1.2M REQ/SEC",
      proj_main_id: "ID: PIPELINE_01",
      proj_main_title: "Distributed assistance pipeline",
      proj_main_desc:
        "Real-time event streaming with Kafka for high-concurrency messaging and EKS for resilient orchestration.",
      proj_main_gh: "View on GitHub",
      proj_feature_status: "PRODUCTION",
      proj_feature_stars: "Stars",
      proj_feature_id: "ID: ATTENDANCE_SYSTEM_001",
      proj_feature_title: "Distributed Attendance Pipeline",
      proj_feature_desc:
        "Real-time distributed system with Kafka ingestion of video/RTSP streams + facial embeddings, S3/HDFS storage, FastAPI backend, and full observability stack. Infrastructure as Code with Pulumi, Kubernetes k3s orchestration, GitOps with Argo CD, and monitoring with Prometheus/Grafana.",
      proj_feature_cta: "View on GitHub",
      proj_card1_title: "Extracta-Finanzas",
      proj_card1_desc:
        "Financial data extraction and processing pipeline. Integrates multiple APIs for real-time financial data collection and analysis.",
      proj_card2_title: "Fire Detection IoT",
      proj_card2_desc:
        "IoT-based fire detection system using fog computing. Real-time sensor data processing and alert generation with edge computing.",
      proj_card3_title: "Recommendation System",
      proj_card3_desc:
        "ML-based recommendation engine using collaborative filtering and content-based approaches. Optimized for scalability and performance.",
      proj_card4_title: "Big Data Analytics",
      proj_card4_desc:
        "Large-scale data processing and analysis framework. Implements distributed computing patterns for handling massive datasets efficiently.",
      proj_card5_title: "IoT Visualization",
      proj_card5_desc:
        "Real-time IoT data visualization platform. Interactive dashboards for monitoring sensor networks and analyzing time-series data streams.",
      proj_card6_title: "Topics in Data Science",
      proj_card6_desc:
        "Educational repository covering advanced topics in data science. Includes machine learning models, statistical analysis, and best practices.",
      proj_card_cta: "View Repository",
      proj_p2_env: "PRODUCTION",
      proj_p2_arch: "ARCH_02",
      proj_p2_title: "Medallion architecture on Azure",
      proj_p2_desc:
        "Bronze, Silver, and Gold delta tables with Azure Synapse and Data Factory for automated ETL.",
      proj_p2_cta: "Project details",
      proj_p3_env: "COMPLETE",
      proj_p3_arch: "MIG_08",
      proj_p3_title: "Snowflake to Databricks migration",
      proj_p3_desc:
        "Zero-downtime migration of a 50TB+ warehouse. SQL procedures refactored to optimized PySpark pipelines.",
      proj_cta_title: "Explore More on GitHub",
      proj_cta_body:
        "My complete portfolio includes over 90 repositories covering data engineering, machine learning, full-stack development, and more. Check my GitHub profile for the latest projects.",
      proj_cta_gh: "View All Repositories",
      proj_cta_home: "Back to Home",
      proj_cta_cv: "Download resume",
      proj_footer_docs: "Docs",
    },
    es: {
      _meta_home: "Piero Vizcarra | Ingeniero de datos",
      _meta_exp: "Piero Vizcarra | Experiencia y trayectoria",
      _meta_proj: "Piero Vizcarra | Proyectos destacados",

      nav_brand: "> DATA_ENGINEER",
      nav_home: "Inicio",
      nav_about: "Sobre mí",
      nav_projects: "Proyectos",
      nav_exp: "Experiencia",
      nav_skills: "Habilidades",

      home_hero_status: "ESTADO: PIPELINE_ACTIVO",
      home_hero_latlon: "LAT: -16,4090 / LON: -71,5375",
      home_hero_h1_a: "PIERO VIZCARRA:",
      home_hero_h1_b: "Diseñando",
      home_hero_h1_c: "pipelines de datos",
      home_hero_subtitle_html:
        'Ingeniero de datos en la nube especializado en <span class="text-on-surface font-semibold underline decoration-primary-light decoration-2 underline-offset-4">arquitectura Medallion</span>. Construyendo sistemas robustos y escalables en AWS, GCP y Azure.',
      home_hero_cta_contact: "Contacto",
      home_hero_cta_projects: "Ver proyectos",
      home_scroll: "Desplazar",

      home_about_badge: "SOBRE_MI",
      home_about_title: "Ingeniero",
      home_about_subtitle: "de Datos",
      home_about_p1: "Bachiller de Ciencia de la Computación de la Universidad Nacional de San Agustín (UNSA), Arequipa, Perú (2020-2025). Apasionado por data engineering, arquitectura en la nube y construcción de soluciones de datos escalables.",
      home_about_p2: "Con 4+ años construyendo pipelines ETL/ELT de producción, arquitecturas Medallion e infraestructura cloud escalable en AWS, GCP y Azure. Experto en Python, PySpark, SQL, Kafka y Kubernetes con enfoque en gobernanza IAM, CI/CD y calidad del dato.",
      home_about_unsa: "Lic. Ciencias de la Computación @ UNSA Arequipa | Microsoft DP-700 & AWS Certified",

      home_tech_title: "Stack Tecnológico",
      home_tech_desc: "Lenguajes, frameworks y herramientas que uso para arquitectar e implementar soluciones de datos.",
      home_tech_languages: "Lenguajes",
      home_tech_cloud: "Cloud & Infraestructura",
      home_tech_data: "Data & Big Data",
      home_tech_tools: "Herramientas & DevOps",

      home_stat_uptime_lbl: "Disponibilidad y fiabilidad del pipeline",
      home_stat_etl_lbl: "Arquitecturas ETL",
      home_stat_data_lbl: "Datos procesados (PB)",

      home_featured_title: "Proyectos Destacados",
      home_featured_desc: "Una selección de mis proyectos más impactantes e interesantes técnicamente. Visita mi GitHub para el portafolio completo.",
      home_featured_cta: "Ver repo",
      home_feat_p1_title: "ECGMAMBA-XAI",
      home_feat_p1_desc: "Modelo ML para análisis de ECG con IA explicable. Python, TensorFlow, arquitectura MAMBA.",
      home_feat_p2_title: "Extracta-Finanzas",
      home_feat_p2_desc: "Pipeline de extracción y ETL de datos financieros. Python, APIs, Procesamiento.",
      home_feat_p3_title: "Sistema Distribuido de Asistencia",
      home_feat_p3_desc: "Kafka + AWS + Kubernetes para procesamiento de video y reconocimiento facial en tiempo real.",
      home_feat_cta: "Ver Repo",
      home_feat_all: "Ver Todos los Proyectos",

      home_location_title: "Base operativa",
      home_location_body:
        "Ubicado en <span class=\"text-on-surface font-semibold\">Arequipa, Perú</span>. Aprovechando infraestructura cloud global con precisión local y enfoque técnico.",
      home_location_coords: "AREQUIPA // 16,4090° S, 71,5375° O",
      home_footer_brand: "KINETIC_PIPELINE",
      home_footer_copy: "Piero Vizcarra Vargas | Portafolio",

      exp_badge: "ESTADO_DEL_SISTEMA: OPERATIVO",
      exp_h2_a: "TRAYECTORIA",
      exp_h2_b: "PIPELINE",
      exp_intro:
        "Flujos de datos robustos e infraestructura en la nube. Hitos profesionales y certificaciones en orden cronológico.",
      exp_t1_date: "JUN 2025 - ACTUALIDAD",
      exp_t1_role: "Ingeniero de Datos en la Nube",
      exp_t1_company: "@ Growth Strategy (Remoto)",
      exp_t1_badge: "ACTUAL",
      exp_t1_desc:
        "Diseño pipelines ETL/ELT end-to-end en Azure para múltiples clientes (MeedoSweet, Gamao, Rafe Group), reduciendo tiempo de preparación de datos para BI en ~60%. Implemento arquitectura Medallion (Bronze→Silver→Gold), liderizo migraciones a Microsoft Fabric, automatizo flujos operativos críticos, y ejecuto migraciones Snowflake→Databricks con dbt. Implemento linaje de datos e integración con Microsoft Purview.",
      exp_t2_date: "ENE 2025 - DIC 2025",
      exp_t2_role: "Ingeniero de Datos",
      exp_t2_company: "@ Sociedad de Beneficencia de Arequipa (Híbrido)",
      exp_t2_desc:
        "Lideré migración de sistemas legacy a Google Cloud bajo normativa ISO 27000, alcanzando 99.5% de disponibilidad. Ejecuté migración completa a AWS (EC2, S3, Route53, SES) e implementé control de accesos IAM/RBAC. Diseñé dashboards en Power BI para analytics self-service. Optimicé consultas críticas en PostgreSQL y SQL Server para reportes de alto volumen.",
      exp_t3_date: "ENE 2024 - DIC 2024",
      exp_t3_role: "Ingeniero de Software",
      exp_t3_company: "@ Sociedad de Beneficencia (Presencial)",
      exp_t3_desc:
        "Integré fuentes heterogéneas con scripts ETL en Python y APIs RESTful para consolidación de reportes. Automaticé pipelines CI/CD con Jenkins y Git. Optimicé consultas críticas en PostgreSQL y SQL Server para reportes de alto volumen, reduciendo tiempos de ejecución.",
      exp_sys_info: "INFO_SISTEMA",
      exp_sys_user: "> USUARIO: PIERO_VIZCARRA",
      exp_sys_loc: "> UBIC: AREQUIPA_PE",
      exp_sys_time: "> TIEMPO: 2024.Q4.PIPELINE",
      exp_sys_uptime: "> ACTIVIDAD: 5+ AÑOS_EXP",
      exp_cert_heading: "Certificaciones",
      exp_cert1_code: "Microsoft DP-700",
      exp_cert1_name: "Fabric Data Engineer Associate",
      exp_cert2_code: "AWS Cloud Foundations",
      exp_cert2_name: "AWS Certified Cloud Practitioner (+ Architecting)",
      exp_img_tag: "VISTA_INFRA_CORE",
      exp_footer_stable: "Sistema estable",

      proj_repo_sync: "Sincronización del repositorio: 100%",
      proj_h2_a: "PIPELINES",
      proj_h2_b: "DESTACADOS",
      proj_intro:
        "Entornos de datos escalables. Ingesta de alto rendimiento, orquestación y almacenamiento nativo en la nube.",
      proj_main_status: "ACTIVO",
      proj_main_metric_lbl: "Métrica de tráfico",
      proj_main_metric_val: "1,2M REQ/SEG",
      proj_main_id: "ID: PIPELINE_01",
      proj_main_title: "Pipeline distribuido de asistencia",
      proj_main_desc:
        "Streaming en tiempo real con Kafka para mensajería de alta concurrencia y EKS para orquestación resiliente.",
      proj_main_gh: "Ver en GitHub",
      proj_feature_status: "PRODUCCION",
      proj_feature_stars: "Estrellas",
      proj_feature_id: "ID: ATTENDANCE_SYSTEM_001",
      proj_feature_title: "Pipeline distribuido de asistencia",
      proj_feature_desc:
        "Sistema distribuido en tiempo real con ingesta Kafka de flujos video/RTSP + embeddings faciales, almacenamiento S3/HDFS, backend FastAPI y stack completo de observabilidad. Infraestructura como codigo con Pulumi, orquestacion Kubernetes k3s, GitOps con Argo CD y monitoreo con Prometheus/Grafana.",
      proj_feature_cta: "Ver en GitHub",
      proj_card1_title: "Extracta-Finanzas",
      proj_card1_desc:
        "Pipeline de extraccion y procesamiento de datos financieros. Integra multiples APIs para recoleccion y analisis de datos financieros en tiempo real.",
      proj_card2_title: "Deteccion de incendios IoT",
      proj_card2_desc:
        "Sistema de deteccion de incendios basado en IoT usando fog computing. Procesamiento de sensores en tiempo real y generacion de alertas en el borde.",
      proj_card3_title: "Sistema de recomendacion",
      proj_card3_desc:
        "Motor de recomendaciones basado en ML con filtrado colaborativo y enfoques basados en contenido. Optimizado para escalabilidad y rendimiento.",
      proj_card4_title: "Analitica de Big Data",
      proj_card4_desc:
        "Framework para procesamiento y analisis de datos a gran escala. Implementa patrones de computacion distribuida para manejar datasets masivos eficientemente.",
      proj_card5_title: "Visualizacion IoT",
      proj_card5_desc:
        "Plataforma de visualizacion de datos IoT en tiempo real. Dashboards interactivos para monitorear redes de sensores y analizar series temporales.",
      proj_card6_title: "Topicos de Ciencia de Datos",
      proj_card6_desc:
        "Repositorio educativo con topicos avanzados de ciencia de datos. Incluye modelos de machine learning, analisis estadistico y buenas practicas.",
      proj_card_cta: "Ver repositorio",
      proj_p2_env: "PRODUCCIÓN",
      proj_p2_arch: "ARCH_02",
      proj_p2_title: "Arquitectura Medallion en Azure",
      proj_p2_desc:
        "Tablas delta Bronce, Plata y Oro con Azure Synapse y Data Factory para ETL automatizado.",
      proj_p2_cta: "Detalles del proyecto",
      proj_p3_env: "COMPLETADO",
      proj_p3_arch: "MIG_08",
      proj_p3_title: "Migración Snowflake a Databricks",
      proj_p3_desc:
        "Migración sin tiempo de inactividad de un almacén de más de 50 TB. Procedimientos SQL refactorizados a pipelines PySpark optimizados.",
      proj_cta_title: "Explora mas en GitHub",
      proj_cta_body:
        "Mi portafolio completo incluye mas de 90 repositorios de data engineering, machine learning, desarrollo full-stack y mas. Revisa mi perfil de GitHub para ver los proyectos mas recientes.",
      proj_cta_gh: "Ver todos los repositorios",
      proj_cta_home: "Volver al inicio",
      proj_cta_cv: "Descargar CV",
      proj_footer_docs: "Docs",
    },
  };

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") return stored;
    if (typeof navigator !== "undefined" && navigator.language) {
      return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
    }
    return "es";
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "es") return;
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
  }

  function apply(lang) {
    const dict = STRINGS[lang] || STRINGS.es;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key && dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (key && dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    var metaKey = document.body && document.body.getAttribute("data-i18n-meta");
    if (metaKey && dict[metaKey] !== undefined) {
      document.title = dict[metaKey];
    }

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang-btn") === lang;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      btn.classList.toggle("opacity-100", isActive);
      btn.classList.toggle("opacity-50", !isActive);
      btn.classList.toggle("font-bold", isActive);
    });
  }

  function init() {
    var lang = getLang();
    apply(lang);

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = btn.getAttribute("data-lang-btn");
        if (target === "en" || target === "es") setLang(target);
      });
    });
  }

  window.PortfolioI18n = {
    getLang: getLang,
    setLang: setLang,
    apply: apply,
    init: init,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
