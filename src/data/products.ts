export const TAG = import.meta.env.PUBLIC_AMAZON_TAG ?? 'TUTAG-21';

export interface Product { name: string; ideal: string; pros: [string, string]; q: string }
export interface Category { slug: string; title: string; short: string; icon: string; intro: string; guide: string; products: Product[] }

// Enlace de afiliado: búsqueda en Amazon.es. Sustitúyelo por el enlace de producto (SiteStripe) cuando lo tengas.
export const link = (q: string) => `https://www.amazon.es/s?k=${encodeURIComponent(q)}&tag=${TAG}`;

// El primer producto de cada categoría es "Nuestra elección".
export const categories: Category[] = [
  { slug: 'marcos-digitales', title: 'Mejores marcos digitales', short: 'Marcos digitales', icon: '🖼️',
    intro: 'Pantallas WiFi que reciben fotos desde el móvil. Perfectas para regalar a quien está lejos.',
    guide: 'Busca pantalla IPS, WiFi con app propia y al menos 16 GB. Si es para una persona mayor, elige el que se configura solo.',
    products: [
      { name: 'AEEZO WiFi 10,1" táctil', ideal: 'La mejor opción para casi todos', pros: ['Pantalla IPS HD con giro automático', 'Envío de fotos desde la app'], q: 'marco digital AEEZO WiFi 10.1 pulgadas' },
      { name: 'Pix-Star WiFi', ideal: 'Para abuelos y regalos', pros: ['Recibe fotos por email', 'Admite vídeo y audio'], q: 'marco digital Pix-Star WiFi' },
      { name: 'FUNCARE 32 GB', ideal: 'Para muchas fotos y vídeos', pros: ['32 GB de memoria propia', 'No depende de la nube'], q: 'marco digital FUNCARE 32GB' },
      { name: 'Nixplay WiFi 10,1"', ideal: 'Para álbumes compartidos', pros: ['Gestión desde la app', 'Listas compartidas con la familia'], q: 'marco digital Nixplay WiFi' },
      { name: 'Aura Carver', ideal: 'Para el salón', pros: ['Acabado de diseño', 'Pantalla de gran calidad'], q: 'marco digital Aura Carver' } ] },
  { slug: 'impresoras-fotograficas', title: 'Mejores impresoras fotográficas para casa', short: 'Impresoras fotográficas', icon: '🖨️',
    intro: 'Desde impresoras de bolsillo hasta equipos de tinta de gran formato.',
    guide: 'Para fotos de 10×15 elige sublimación: es más barata por copia. Para formatos grandes, una de tinta con 6 colores.',
    products: [
      { name: 'Canon SELPHY CP1500', ideal: 'La mejor para fotos 10×15', pros: ['Impresión resistente al agua', 'Calidad de laboratorio'], q: 'Canon SELPHY CP1500' },
      { name: 'Epson EcoTank ET-8550', ideal: 'Para formato grande', pros: ['Hasta A3+', 'Tinta recargable de 6 colores'], q: 'Epson EcoTank ET-8550' },
      { name: 'Canon Zoemini 2', ideal: 'Para imprimir desde el móvil', pros: ['Cabe en el bolsillo', 'Conexión directa con el móvil'], q: 'Canon Zoemini 2' },
      { name: 'HP Envy Inspire 7220e', ideal: 'Para toda la familia', pros: ['Multifunción versátil', 'Impresión a doble cara'], q: 'HP Envy Inspire 7220e' },
      { name: 'Xiaomi Portable Photo Printer Pro', ideal: 'Para no gastar en tinta', pros: ['Impresión térmica sin tinta', 'Bluetooth y accesorios incluidos'], q: 'Xiaomi Portable Photo Printer Pro' } ] },
  { slug: 'regalos-boda', title: 'Regalos personalizados para bodas', short: 'Regalos de boda', icon: '💍',
    intro: 'Detalles con nombres y fecha para novios e invitados.',
    guide: 'Comprueba el plazo de grabado antes de la boda y escribe nombres y fecha tal como van a aparecer.',
    products: [
      { name: 'Copas de brindis grabadas', ideal: 'El regalo que nunca falla', pros: ['Nombres y fecha grabados', 'Se guardan como recuerdo'], q: 'copas boda personalizadas grabadas novios' },
      { name: 'Libro de firmas personalizado', ideal: 'Para el día de la boda', pros: ['Los invitados dejan su mensaje', 'Portada personalizable'], q: 'libro de firmas boda personalizado' },
      { name: 'Marco de fotos grabado', ideal: 'Para la mejor foto', pros: ['Madera con dedicatoria', 'Fácil de regalar'], q: 'marco fotos boda personalizado grabado' },
      { name: 'Caja de recuerdos de madera', ideal: 'Para guardar cartas y entradas', pros: ['Tapa grabada', 'Dura toda la vida'], q: 'caja recuerdos madera personalizada boda' },
      { name: 'Lámpara LED con foto', ideal: 'Para sorprender', pros: ['Se ilumina con vuestra foto', 'Original y decorativa'], q: 'lámpara led foto personalizada regalo boda' } ] },
  { slug: 'albumes-premium', title: 'Álbumes de fotos premium', short: 'Álbumes premium', icon: '📖',
    intro: 'Materiales nobles y páginas que cuidan tus fotos durante décadas.',
    guide: 'Elige páginas libres de ácido y confirma el tamaño de tus copias (10×15 o 13×18) antes de comprar.',
    products: [
      { name: 'Álbum de lino 10×15', ideal: 'El más equilibrado', pros: ['Hasta 500 fotos en bolsillos', 'Portada de tela elegante'], q: 'álbum fotos lino 10x15 500 fotos' },
      { name: 'Álbum de cuero', ideal: 'Para regalar con estilo', pros: ['Tapa de piel', 'Páginas libres de ácido'], q: 'álbum fotos cuero premium' },
      { name: 'Álbum autoadhesivo clásico', ideal: 'Para pegar sin complicarte', pros: ['Páginas adhesivas', 'Lámina protectora transparente'], q: 'álbum fotos autoadhesivo grande' },
      { name: 'Álbum para Polaroid', ideal: 'Para fotos instantáneas', pros: ['Bolsillos del tamaño justo', 'Ligero y compacto'], q: 'álbum fotos polaroid instax' },
      { name: 'Álbum scrapbook kraft', ideal: 'Para decorar a tu gusto', pros: ['Hojas para pegar y escribir', 'Ideal para manualidades'], q: 'álbum scrapbook kraft DIY' } ] },
  { slug: 'fotolibros', title: 'Fotolibros recomendados', short: 'Fotolibros', icon: '📚',
    intro: 'Libros de recuerdos, kits y guías para contar una historia con tus fotos.',
    guide: 'Si quieres un fotolibro impreso a medida, se pide en servicios de impresión. Aquí tienes libros y kits para montarlo tú.',
    products: [
      { name: 'Libro de recuerdos de pareja', ideal: 'El favorito para regalar', pros: ['Guiado: solo rellenar', 'Espacio para fotos y vivencias'], q: 'libro de recuerdos pareja para rellenar fotos' },
      { name: 'Álbum de bebé', ideal: 'Para el primer año', pros: ['Mes a mes', 'Recuerdos de los primeros pasos'], q: 'álbum bebé primer año recuerdos libro' },
      { name: 'Diario de viaje con fotos', ideal: 'Para viajeros', pros: ['Hojas para pegar entradas', 'Cabe en la mochila'], q: 'diario de viaje scrapbook fotos' },
      { name: 'Kit fotolibro DIY', ideal: 'Para hacerlo tú mismo', pros: ['Todo incluido', 'Resultado personal'], q: 'kit fotolibro scrapbook DIY' },
      { name: 'Libro de fotografía creativa', ideal: 'Para mejorar tus fotos', pros: ['Ideas de composición', 'Para todos los niveles'], q: 'libro fotografía creativa guía' } ] }
];
