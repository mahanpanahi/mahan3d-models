/*
  PRODUCT DATA
  ------------------------------------------------
  image: مسیر عکس اصلی مدل. اگر خالی باشد fallback خودکار نمایش داده می‌شود.
  gallery: چند عکس برای صفحه جزئیات. خالی = فقط fallback.
  برای اضافه کردن محصول، فقط یک object جدید به products اضافه شود.
*/
const products = [
  {
    id: 1,
    title: "Fownix Arrizo 6 GT",
    category: "cars",
    categoryLabel: "CAR / VEHICLE",
    image: "assets/images/cars/Arrizo6GT/Arrizo6GT.jpg",
    gallery: ["assets/images/cars/Arrizo6GT/Arrizo6GT1.jpg"],
    price: "توافقی",
    stock: "موجود",
    description:
      "مدل دقیق و با جزئیات و بهینه آریزو 6 جی تی برای رندر، بازی و پروژه‌های دیجیتال.",
    specs: {
      polygons: "30K",
      vertices: "",
      formats: "FBX / OBJ / ...",
      textures: "4K PBR",
    },
  },
  {
    id: 2,
    title: "BMW Series 5",
    category: "cars",
    categoryLabel: "CAR / VEHICLE",
    image: "assets/images/cars/BMW_Series5.jpg",
    gallery: [],
    price: "توافقی",
    stock: "موجود",
    description: "مدل دقیق بی ام و سری 5 مناسب برای رندر، بازی و پروژه های دیجیتال",
    specs: {
      polygons: "18K",
      vertices: "",
      formats: "FBX / OBJ",
      textures: "4K PBR",
    },
  },
  {
    id: 3,
    title: "KMC T8",
    category: "cars",
    categoryLabel: "CAR / VEHICLE",
    image: "assets/images/cars/kmcT8/kmct8.jpg",
    gallery: ["assets/images/cars/kmcT8/kmct8_1.jpg"],
    price: "توافقی",
    stock: "موجود",
    description:
      "مدل سه بعدی خودرو کی ام سی تی 8 با جزییات بالا مناسب برای استفاده در بازی و یا هر کاربری دیگر",
    specs: {
      polygons: "40k",
      vertices: "",
      formats: "FBX / OBJ / ...",
      textures: "4K PBR",
    },
  },
  {
    id: 4,
    title: "BE RDI",
    category: "cars",
    categoryLabel: "CAR / VEHICLE",
    image: "assets/images/cars/405/rdi02.jpg",
    gallery: ["assets/images/cars/405/rdi01.jpg"],
    price: "توافقی",
    stock: "موجود",
    description:
      "مدل سه بعدی آردی بنیامین با جزییات بالا مناسب برای استفاده در بازی و یا هر کاربری دیگر",
    specs: {
      polygons: "20k",
      vertices: "",
      formats: "FBX / OBJ / ...",
      textures: "4K PBR",
    },
  },
  {
    id: 5,
    title: "405 Station",
    category: "cars",
    categoryLabel: "CAR / VEHICLE",
    image: "assets/images/cars/405/405station.jpg",
    gallery: ["assets/images/cars/405/405station1.jpg"],
    price: "توافقی",
    stock: "موجود",
    description:
      "مدل سه بعدی 405 استیشن با جزییات بالا مناسب برای استفاده در بازی و یا هر کاربری دیگر",
    specs: {
      polygons: "20k",
      vertices: "",
      formats: "FBX / OBJ / ...",
      textures: "4K PBR",
    },
  },
  {
    id: 6,
    title: "Honda EV Ster",
    category: "cars",
    categoryLabel: "CAR / VEHICLE",
    image: "assets/images/cars/honda ev ster01v.png",
    gallery: [],
    price: "0",
    stock: "ناموجود / نمایشی",
    description:
      "مدل سه بعدی Honda EV Ster با جزییات بالا",
    specs: {
      polygons: "200k",
      vertices: "",
      formats: "❤️",
      textures: "4K PBR",
    },
  },
  {
    id: 7,
    title: "Kia Cerato 2010",
    category: "cars",
    categoryLabel: "CAR / VEHICLE",
    image: "assets/images/cars/cerato/cerato.jpg",
    gallery: ["assets/images/cars/cerato/cerato1.jpg"],
    price: "توافقی",
    stock: "موجود",
    description:
      "مدل سه بعدی کیا سراتو - سراتو سایپایی با جزییات بالا، مناسب برای استفاده در بازی و یا هر استفاده دیگری...",
    specs: {
      polygons: "50k",
      vertices: "",
      formats: "FBX / OBJ / ...",
      textures: "4K PBR",
    },
  },
  {
    id: 8,
    title: "iran khodro paykan",
    category: "cars",
    categoryLabel: "CAR / VEHICLE",
    image: "assets/images/cars/cerato/peykan.jpg",
    gallery: [],
    price: "0",
    stock: "درحال ساخت - قابل پیش خرید",
    description:
      "مدل سه بعدی پیکان با جزییات بالا، مناسب برای استفاده در بازی و یا هر استفاده دیگری...",
    specs: {
      polygons: "❤️",
      vertices: "",
      formats: "FBX / OBJ / ...",
      textures: "4K PBR",
    },
  },
  {
    id: 9,
    title: "saipa pride",
    category: "cars",
    categoryLabel: "CAR / VEHICLE",
    image: "assets/images/cars/cerato/pride.jpg",
    gallery: [],
    price: "0",
    stock: "درحال ساخت - قابل پیش خرید",
    description:
      "مدل سه بعدی سایپا پراید با جزییات بالا، مناسب برای استفاده در بازی و یا هر استفاده دیگری...",
    specs: {
      polygons: "❤️",
      vertices: "",
      formats: "FBX / OBJ / ...",
      textures: "4K PBR",
    },
  },
  {
    id: 10,
    title: "MVM Arrizo 5 fl",
    category: "cars",
    categoryLabel: "CAR / VEHICLE",
    image: "assets/images/cars/Arrizo5fl.jpg",
    gallery: [],
    price: "0",
    stock: "درحال ساخت - قابل پیش خرید",
    description:
      "مدل سه بعدی خودرو آریزو 5 اسپورت با جزییات بالا، مناسب برای استفاده در بازی و یا هر استفاده دیگری...",
    specs: {
      polygons: "❤️",
      vertices: "",
      formats: "FBX / OBJ / ...",
      textures: "4K PBR",
    },
  },
  {
    id: 11,
    title: "Tesla Cybertruck",
    category: "cars",
    categoryLabel: "CAR / VEHICLE",
    image: "assets/images/cars/tesla/tesla.jpg",
    gallery: ["assets/images/cars/tesla/tesla1.jpg"],
    price: "توافقی",
    stock: "موجود",
    description:
      "مدل سه بعدی خودرو تسلا سایبرتراک با جزئیات بالا و مناسب برای استفاده در بازی، رندر و یا هر استفاده دیگری",
    specs: {
      polygons: "15k",
      vertices: "❤️",
      formats: "FBX / OBJ / ...",
      textures: "❤️",
    },
  },
  {
    id: 12,
    title: "مجموعه رینگ های اسپرت",
    category: "wheels",
    categoryLabel: "WHEEL / RIM",
    image: "assets/images/wheels/wheels.jpg",
    gallery: [],
    price: "توافقی",
    stock: "موجود",
    description:
      "مجموعه رینگ های اسپرت با نسبت‌های دقیق و جزئیات بالا مناسب برای رندر و استفاده در بازی - قابلیت سفارش بصورت عمده و یا تکی.",
    specs: {
      polygons: "3k",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 13,
    title: "موتور TU5",
    category: "engines",
    categoryLabel: "ENGINE / CAR ENGINE",
    image: "assets/images/engine/tu5/tu5.jpg",
    gallery: ["assets/images/engine/tu5/tu5_1.jpg"],
    price: "توافقی",
    stock: "موجود",
    description:
      "موتور تی یو فایو ( تی یو 5 ) - موتور خودرو 206 تیپ 5 با جزئیات بالا و مناسب برای استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "3k",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 14,
    title: "Dena + Turbo Engine",
    category: "engines",
    categoryLabel: "ENGINE / CAR ENGINE / CHASSIS",
    image: "assets/images/engine/dena+/dena.jpg",
    gallery: ["assets/images/engine/dena+/dena1.jpg"],
    price: "توافقی",
    stock: "موجود",
    description:
      "موتور و اسکلت خودرو دنا پلاس توربو با جزئیات بالا و مناسب برای استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "3k",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 15,
    title: "Iran Khodro Samand EF7 Engine",
    category: "engines",
    categoryLabel: "ENGINE / CAR ENGINE",
    image: "assets/images/engine/ef7/ef7.jpg",
    gallery: [],
    price: "توافقی",
    stock: "موجود",
    description:
      "موتور ای اف سون مناسب خودور سمند و سایر دستگاه های های ایران خودرو با جزئیات بالا و مناسب برای استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "3k",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 16,
    title: "Nissan Patrol Engine",
    category: "engines",
    categoryLabel: "ENGINE / CAR ENGINE",
    image: "assets/images/engine/patrol/patrol.jpg",
    gallery: [],
    price: "توافقی",
    stock: "موجود",
    description:
      "موتور پاترول با جزئیات بالا و مناسب برای استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "3k",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 17,
    title: "Saipa Pride Engine",
    category: "engines",
    categoryLabel: "ENGINE / CAR ENGINE",
    image: "assets/images/engine/pride/pride.jpg",
    gallery: ["assets/images/engine/pride/pride1.jpg"],
    price: "توافقی",
    stock: "موجود",
    description:
      "موتور خودرو های سایپا پراید با جزئیات بالا و مناسب استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "3k",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 18,
    title: "Renault L90 Engine",
    category: "engines",
    categoryLabel: "ENGINE / CAR ENGINE",
    image: "assets/images/engine/l90/l90.jpg",
    gallery: [],
    price: "توافقی",
    stock: "موجود",
    description:
      "موتور خودرو رنو ال نود با جزئیات بالا و مناسب استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "3k",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 19,
    title: "Peugeot TU3 Engine",
    category: "engines",
    categoryLabel: "ENGINE / CAR ENGINE",
    image: "assets/images/engine/tu3/tu3.jpg",
    gallery: [],
    price: "توافقی",
    stock: "موجود",
    description:
      "موتور تی یو تری (تی یو سه) - مناسب خودرو 206 تیپ 2 با جزئیات بالا و مناسب استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "3k",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 20,
    title: "Peykan - RDI Engine",
    category: "engines",
    categoryLabel: "ENGINE / CAR ENGINE",
    image: "assets/images/engine/peykan/peykan.jpg",
    gallery: [],
    price: "توافقی",
    stock: "موجود",
    description:
      "موتور پیکان مناسب خودرو های پیکان و آردی با جزئیات بالا و مناسب استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "3k",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 21,
    title: "Citroen Xantia Engine",
    category: "engines",
    categoryLabel: "ENGINE / CAR ENGINE",
    image: "assets/images/engine/xantia/xantia.jpg",
    gallery: [],
    price: "توافقی",
    stock: "موجود",
    description:
      "موتور خودرو سیتروئن زانتیا با جزئیات بالا و مناسب استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "3k",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 22,
    title: "باربند مدل ساده",
    category: "racks",
    categoryLabel: "RACKS / CARGO",
    image: "assets/images/racks/rack1.jpg",
    gallery: [],
    price: "توافقی",
    stock: "موجود",
    description:
      "باربند خودرو طرح ساده با جزئیات بالا و مناسب استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "300",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 23,
    title: "باربند مدل راک روف",
    category: "racks",
    categoryLabel: "RACKS / CARGO",
    image: "assets/images/racks/rack2.jpg",
    gallery: [],
    price: "توافقی",
    stock: "موجود",
    description:
      "باربند خودرو طرح راک روف (Rock Roof) با جزئیات بالا و مناسب استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "150",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 24,
    title: "باربند مدل راک روف به همراه روف باکس",
    category: "racks",
    categoryLabel: "RACKS / CARGO",
    image: "assets/images/racks/rack3.jpg",
    gallery: ["assets/images/racks/rack3_1.jpg"],
    price: "توافقی",
    stock: "موجود",
    description:
      "باربند خودرو طرح راک روف به همراه روف باک (Rock Roof + Roof Box) با جزئیات بالا و مناسب استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "700",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 25,
    title: "اتاقک بار وانت",
    category: "racks",
    categoryLabel: "RACKS / CARGO",
    image: "assets/images/racks/rack4.jpg",
    gallery: ["assets/images/racks/rack4_1.jpg"],
    price: "توافقی",
    stock: "موجود",
    description:
      "اتااقک بار مناسب وانت نیسان آبی با جزئیات بالا و مناسب استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "750",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 26,
    title: "باله عقب خودرو طرح یک",
    category: "spoilers",
    categoryLabel: "SPOILER / AERO",
    image: "assets/images/spoiler/spoiler1.jpg",
    gallery: [],
    price: "توافقی",
    stock: "موجود",
    description:
      "اسپویلر - Spoiler خودرو طرح اول با طراحی بهینه و لو پلی و مناسب استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "100",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 27,
    title: "باله عقب خودرو طرح دو",
    category: "spoilers",
    categoryLabel: "SPOILER / AERO",
    image: "assets/images/spoiler/spoiler2.jpg",
    gallery: [],
    price: "توافقی",
    stock: "موجود",
    description:
      "اسپویلر - Spoiler خودرو طرح دوم با طراحی بهینه و لو پلی و مناسب استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "100",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 28,
    title: "باله عقب خودرو طرح سه",
    category: "spoilers",
    categoryLabel: "SPOILER / AERO",
    image: "assets/images/spoiler/spoiler3.jpg",
    gallery: [],
    price: "توافقی",
    stock: "موجود",
    description:
      "اسپویلر - Spoiler خودرو طرح سوم با طراحی بهینه و لو پلی و مناسب استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "100",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 29,
    title: "باله عقب خودرو طرح چهار",
    category: "spoilers",
    categoryLabel: "SPOILER / AERO",
    image: "assets/images/spoiler/spoiler4.jpg",
    gallery: [],
    price: "توافقی",
    stock: "موجود",
    description:
      "اسپویلر - Spoiler خودرو طرح چهارم با طراحی بهینه و لو پلی و مناسب استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "100",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },
  {
    id: 30,
    title: "باله عقب خودرو طرح پنج",
    category: "spoilers",
    categoryLabel: "SPOILER / AERO",
    image: "assets/images/spoiler/spoiler5.jpg",
    gallery: [],
    price: "توافقی",
    stock: "موجود",
    description:
      "اسپویلر - Spoiler خودرو طرح پنجم با طراحی بهینه و لو پلی و مناسب استفاده در بازی یا استفاده های دیگر",
    specs: {
      polygons: "100",
      vertices: "❤️",
      formats: "FBX / OBJ",
      textures: "❤️",
    },
  },

];

const grid = document.getElementById("productGrid"),
  search = document.getElementById("searchInput"),
  filters = document.getElementById("filters"),
  empty = document.getElementById("emptyState");
let active = "all";

function fallback(type, label) {
  return `<div class="fallback ${type}"><div class="fallback-label"><b>${type === "cars" ? "CAR" : type === "wheels" ? "RIM" : "AERO"}</b><small>${label}</small></div></div>`;
}
function imageHTML(p) {
  if (!p.image) return fallback(p.category, p.categoryLabel);
  return `<img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.outerHTML=fallback('${p.category}','${p.categoryLabel.replace(/'/g, "&#39;")}')">`;
}
function render() {
  const q = search.value.trim().toLowerCase();
  const list = products.filter(
    (p) =>
      (active === "all" || p.category === active) &&
      `${p.title} ${p.categoryLabel} ${p.description}`
        .toLowerCase()
        .includes(q),
  );
  grid.innerHTML = list
    .map(
      (
        p,
        i,
      ) => `<article class="card reveal" style="animation-delay:${i * 0.04}s" data-id="${p.id}">
 <div class="card-image">${imageHTML(p)}<span class="card-index">${String(p.id).padStart(2, "0")} / ${String(products.length).padStart(2, "0")}</span></div>
 <div class="card-body"><div class="card-top"><div><div class="category">${p.categoryLabel}</div><h3>${p.title}</h3></div><div class="price">${p.price}</div></div>
 <div class="card-footer"><span class="stock ${p.stock === "پیش‌فروش" ? "pre" : ""}"><i></i>${p.stock}</span><span>مشاهده جزئیات <i class='fal fa-arrow-left'></i></span></div></div></article>`,
    )
    .join("");
  empty.hidden = !!list.length;
  grid
    .querySelectorAll(".card")
    .forEach((c) => (c.onclick = () => openModal(+c.dataset.id)));
}
function openModal(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  document.getElementById("modalCategory").textContent = p.categoryLabel;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDescription").textContent = p.description;
  document.getElementById("modalPrice").textContent = p.price;
  document.getElementById("modalStock").textContent = p.stock;
  const gallery = [p.image, ...p.gallery].filter(Boolean);
  const gal = document.getElementById("modalGallery");
  gal.className = "modal-gallery" + (gallery.length < 2 ? " single" : "");
  gal.innerHTML = gallery.length
    ? gallery
        .map(
          (src) =>
            `<img src="${src}" alt="${p.title}" onerror="this.remove()">`,
        )
        .join("")
    : fallback(p.category, p.categoryLabel);
  document.getElementById("modalSpecs").innerHTML = Object.entries(p.specs)
    .map(([k, v]) => `<div class="detail"><small>${k}</small><b>${v}</b></div>`)
    .join("");
  document.getElementById("modal").showModal();
}
document.getElementById("modalClose").onclick = () =>
  document.getElementById("modal").close();
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") e.target.close();
});
search.oninput = render;
filters.onclick = (e) => {
  const b = e.target.closest(".filter");
  if (!b) return;
  active = b.dataset.category;
  filters
    .querySelectorAll(".filter")
    .forEach((x) => x.classList.toggle("active", x === b));
  render();
};

const toggle = document.getElementById("themeToggle"),
  icon = document.getElementById("themeIcon");
const saved = localStorage.getItem("mahan-theme");
if (saved === "dark") document.documentElement.dataset.theme = "dark";
function sync() {
  icon.innerHTML =
    document.documentElement.dataset.theme === "dark" ? "<i class='fal fa-moon'></i>" : "<i class='fal fa-sun'></i>";
}
sync();
toggle.onclick = () => {
  if (document.documentElement.dataset.theme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("mahan-theme", "light");
  } else {
    document.documentElement.dataset.theme = "dark";
    localStorage.setItem("mahan-theme", "dark");
  }
  sync();
};
render();
