const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50, size: 'A4' });
doc.pipe(fs.createWriteStream('public/assets/IDS_Works_Brochure_Tecnico.pdf'));

// Colors
const vaultBlue = '#005C97';
const vaultDarkBlue = '#003366';
const vaultYellow = '#FFD700';
const textGray = '#36454F';
const textLight = '#64748B';
const tableLine = '#E2E8F0';

// Helper for drawing a header line
const drawLine = (y) => {
    doc.moveTo(50, y).lineTo(545, y).strokeColor(vaultYellow).lineWidth(2).stroke();
};

// Helper for drawing tables
const drawTable = (doc, startY, headers, rows) => {
    const colWidth = (545 - 50) / 2;
    
    // Headers
    doc.fillColor(vaultDarkBlue).font('Helvetica-Bold').fontSize(10);
    doc.text(headers[0], 55, startY + 5);
    doc.text(headers[1], 55 + colWidth, startY + 5);
    
    doc.moveTo(50, startY + 20).lineTo(545, startY + 20).strokeColor(vaultDarkBlue).lineWidth(1).stroke();
    
    let y = startY + 25;
    doc.font('Helvetica').fontSize(9);
    
    rows.forEach(row => {
        // Calculate max height needed for this row
        const h1 = doc.heightOfString(row[0], { width: colWidth - 10 });
        const h2 = doc.heightOfString(row[1], { width: colWidth - 10 });
        const rowHeight = Math.max(h1, h2) + 10;
        
        // If row goes off page, add new page and reset y
        if (y + rowHeight > doc.page.height - 50) {
            doc.addPage();
            y = 50;
            // Redraw headers on new page
            doc.fillColor(vaultDarkBlue).font('Helvetica-Bold').fontSize(10);
            doc.text(headers[0], 55, y + 5);
            doc.text(headers[1], 55 + colWidth, y + 5);
            doc.moveTo(50, y + 20).lineTo(545, y + 20).strokeColor(vaultDarkBlue).lineWidth(1).stroke();
            y += 25;
            doc.font('Helvetica').fontSize(9);
        }
        
        doc.fillColor(textGray);
        doc.text(row[0], 55, y, { width: colWidth - 10 });
        doc.text(row[1], 55 + colWidth, y, { width: colWidth - 10 });
        
        y += rowHeight;
        doc.moveTo(50, y).lineTo(545, y).strokeColor(tableLine).lineWidth(1).stroke();
        y += 5;
    });
    
    doc.x = 50; // Reset X coordinate for subsequent text
    return y;
};

// --- HEADER ---
doc.fillColor(vaultDarkBlue).font('Helvetica-Bold').fontSize(32).text('I.D.S Works', 50, 50);
doc.fillColor(vaultYellow).font('Courier-Bold').fontSize(10).text('SISTEMAS EDUCATIVOS SOBERANOS', 50, 85);
drawLine(105);

// Title
doc.moveDown(2);
doc.fillColor(vaultDarkBlue).font('Helvetica-Bold').fontSize(24).text('Brochure Técnico y Análisis de ROI');
doc.moveDown(0.5);
doc.fillColor(textGray).font('Helvetica').fontSize(11).text('Análisis profundo de la infraestructura digital, soluciones tecnológicas y retorno de inversión (ROI) para instituciones educativas de alto rendimiento.', { width: 495, align: 'justify' });

// --- TIER 1: LITE ---
doc.moveDown(2);
doc.fillColor(vaultBlue).font('Helvetica-Bold').fontSize(16).text('1. LITE: La Fundación de Seguridad Institucional');
doc.fillColor(textGray).font('Helvetica-Bold').fontSize(12).text('Inversión Única: $100,000 MXN');
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(10);
doc.text('El nivel Lite establece una fortaleza digital y legitima a la institución. Gestionamos la burocracia para obtener el dominio .edu.mx y desplegamos una arquitectura estática (Jamstack) pre-renderizada. No hay base de datos expuesta, reduciendo la superficie de ataque a casi cero y garantizando velocidades de carga sub-segundo.', { align: 'justify' });
doc.moveDown(0.5);

doc.font('Helvetica-Bold').text('Implementación Tecnológica:');
doc.font('Helvetica').list([
    'Arquitectura Estática Jamstack (Cero vulnerabilidades SQL/Ransomware común).',
    'Gestión y validación de dominio oficial .edu.mx.',
    'Microsoft Entra ID para inicio de sesión único (SSO).',
    'Exchange Online para correos institucionales de grado empresarial.'
], { bulletRadius: 3 });

doc.moveDown(1);
let currentY = doc.y;
currentY = drawTable(doc, currentY, 
    ['Modelo Tradicional (WordPress + CPanel)', 'Modelo IDS Works LITE'],
    [
        ['Bases de datos expuestas a inyecciones SQL y hackeos.', 'Código pre-renderizado sin base de datos pública. Ataques mitigados.'],
        ['Correos genéricos (@gmail.com) que restan prestigio.', 'Correos institucionales bajo dominio oficial .edu.mx.'],
        ['Dependencia de plugins de terceros que alientan la carga.', 'Tiempos de carga inferiores a 1 segundo. Resiliencia total.']
    ]
);

// --- TIER 2: STANDARD ---
doc.y = currentY;
doc.moveDown(2);
doc.fillColor(vaultBlue).font('Helvetica-Bold').fontSize(16).text('2. ESTÁNDAR: Autonomía Operativa y Bilingüismo');
doc.fillColor(textGray).font('Helvetica-Bold').fontSize(12).text('Inversión Única: $300,000 MXN');
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(10);
doc.text('Diseñado para escuelas que requieren comunicación fluida sin depender de programadores. Implementamos un Gestor Visual de Contenido (CMS) "Headless" que permite al personal publicar noticias y calendarios a velocidad de red social. Además, integra un Portal de Padres consolidado y bilingüismo nativo (EN/ES).', { align: 'justify' });
doc.moveDown(0.5);

doc.font('Helvetica-Bold').text('Implementación Tecnológica:');
doc.font('Helvetica').list([
    'Gestor Visual de Contenido (CMS) Headless en tiempo real.',
    'Enrutamiento bilingüe avanzado con internacionalización (i18n).',
    'Portal de Padres unificado (One-Look Parent Portal).',
    'Integración con SharePoint Online para Bóveda de Admisiones (Cero Papel).',
    'Aulas Virtuales y Staff unificados en Microsoft Teams for Education.'
], { bulletRadius: 3 });

doc.moveDown(1);
currentY = doc.y;
currentY = drawTable(doc, currentY, 
    ['Modelo Tradicional (Comunicación Fragmentada)', 'Modelo IDS Works ESTÁNDAR'],
    [
        ['Avisos enviados por grupos no oficiales de WhatsApp o Facebook.', 'Portal de Padres unificado; comunicación institucional formal y segura.'],
        ['Actualizaciones web requieren tickets a agencias de marketing.', 'El personal escolar publica al instante usando el CMS Visual Headless.'],
        ['Proceso de admisión basado en papel y correos perdidos.', 'Bóveda de Admisiones en SharePoint; carga documental digital y rastreable.']
    ]
);

// NEW PAGE
doc.addPage();
drawLine(50);

// --- TIER 3: INTEGRATED ---
doc.moveDown(1.5);
doc.fillColor(vaultDarkBlue).font('Helvetica-Bold').fontSize(16).text('3. INTEGRADO: Ecosistema Empresarial Automatizado');
doc.fillColor(textGray).font('Helvetica-Bold').fontSize(12).text('Inversión Única: $450,000 MXN');
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(10);
doc.text('Transforma la plataforma en un sistema ERP (Enterprise Resource Planning) educativo. El mayor valor es la automatización "Zero-Touch Provisioning" mediante Microsoft Graph API, un ecosistema financiero embebido, y una red privada para Egresados. La infraestructura definitiva para instituciones de élite.', { align: 'justify' });
doc.moveDown(0.5);

doc.font('Helvetica-Bold').text('Implementación Tecnológica:');
doc.font('Helvetica').list([
    'Zero-Touch Provisioning vía Microsoft Graph API (Matrícula automatizada).',
    'Pasarela de Pagos Segura embebida en el Portal de Padres.',
    'Generación y descarga de facturas XML/PDF automatizada.',
    'Portal de Egresados interactivo (Directorio y Bolsa de Trabajo interna).',
    'ID Digital Soberano para control de seguridad y accesos.'
], { bulletRadius: 3 });

doc.moveDown(1);
currentY = doc.y;
currentY = drawTable(doc, currentY, 
    ['Modelo Tradicional (Sistemas Desconectados)', 'Modelo IDS Works INTEGRADO'],
    [
        ['El equipo de TI crea correos, accesos y grupos manualmente por cada alumno.', 'Zero-Touch: Matricular un alumno crea su correo, le asigna licencias y lo une a Teams automáticamente.'],
        ['Padres pagan en el banco y envían comprobantes por correo para facturar.', 'Pasarela embebida en el portal con descarga inmediata de facturas XML/PDF.'],
        ['Relación con el alumno termina el día de su graduación.', 'Portal de Egresados mantiene el prestigio y fomenta networking y bolsa de trabajo.']
    ]
);

// --- ROI ANALYSIS ---
doc.y = currentY;
doc.moveDown(3);
drawLine(doc.y);
doc.moveDown(1);
doc.fillColor(vaultDarkBlue).font('Helvetica-Bold').fontSize(18).text('Análisis de Retorno de Inversión y Privacidad (Soberanía Digital)');
doc.moveDown(0.5);
doc.fillColor(textGray).font('Helvetica').fontSize(10).text('En el contexto de seguridad nacional, proteger la identidad de las familias es vital. Plataformas vulnerables (como WordPress) exponen constantemente bases de datos con nombres, teléfonos e información sensible de alumnos, padres, staff y egresados, lo que representa un riesgo crítico frente a la extorsión y el crimen organizado.', { width: 495, align: 'justify' });
doc.moveDown(0.5);
doc.text('IDS Works construye verdadera Soberanía Digital. Al no depender de bases de datos públicas, la información de su comunidad nunca abandona el ecosistema blindado de Microsoft (tenant). Garantizamos control absoluto, mitigación de riesgos de ciberseguridad, y cumplimiento estricto con la LFPDPPP, protegiendo a las familias de amenazas externas.', { width: 495, align: 'justify' });

doc.moveDown(1.5);
doc.font('Helvetica-Bold').text('Ejemplo de Impacto Financiero: Institución de 500 Alumnos');
doc.font('Helvetica').text('• Costo anual en plataforma SaaS tradicional: ~$720,000 MXN / año.');
doc.text('• Costo recurrente con arquitectura IDS: $0 MXN (Licencias Microsoft A1 gratuitas para educación).');
doc.moveDown(1);
doc.fillColor(vaultBlue).font('Helvetica-Bold').text('Resultado: Una institución que invierte en el nivel Estándar o Integrado recupera el 100% de su inversión en menos de un ciclo escolar, generando un ahorro neto de casi tres cuartos de millón de pesos anualmente y asegurando la privacidad absoluta de su comunidad.');

// Footer
doc.moveDown(4);
doc.fillColor(vaultBlue).font('Helvetica-Bold').fontSize(10).text('contacto@idsworks.com.mx', { align: 'center' });
doc.fillColor(textLight).font('Helvetica').text('www.idsworks.com.mx', { align: 'center' });

doc.end();
console.log("PDF Brochure created with tables and bullet points.");