// --- CẤU HÌNH MÔN HỌC ---
const SUBJECTS_DATA = {
  "kinh-te-chinh-tri": {
    id: "kinh-te-chinh-tri",
    name: "Kinh tế chính trị",
    shortName: "KTCT",
    icon: "📊",
    color: "blue",      // Tailwind color key
    description: "Kinh tế chính trị Mác - Lênin",
    lessons: [1, 2, 3, 4, 5, 6],
    lessonNames: {
      1: "Đối tượng, phương pháp nghiên cứu và chức năng của KTCT Mác – Lênin",
      2: "Hàng hóa, thị trường và vai trò của các chủ thể tham gia thị trường",
      3: "Giá trị thặng dư trong nền kinh tế thị trường",
      4: "Cạnh tranh và độc quyền trong nền kinh tế thị trường",
      5: "Kinh tế thị trường định hướng XHCN và các quan hệ lợi ích kinh tế ở Việt Nam",
      6: "Công nghiệp hóa, hiện đại hóa và hội nhập kinh tế quốc tế của Việt Nam",
    },
  },
  "ky-thuat-truyen-so-lieu": {
    id: "ky-thuat-truyen-so-lieu",
    name: "Kỹ thuật truyền số liệu",
    shortName: "KTTSL",
    icon: "📡",
    color: "emerald",
    description: "Kỹ thuật truyền dữ liệu và mạng máy tính",
    lessons: ["ktsl_1", "ktsl_2", "ktsl_3", "ktsl_4", "ktsl_5", "ktsl_6", "ktsl_7", "ktsl_8"],
    lessonNames: {
      "ktsl_1": "Tổng quan truyền số liệu & Mô hình OSI/TCP-IP",
      "ktsl_2": "Token Ring, IP và chia mạng cơ bản",
      "ktsl_3": "Mã hóa và Đồng bộ dữ liệu",
      "ktsl_4": "Phát hiện sai và Nén dữ liệu",
      "ktsl_5": "Bài 5 KTTSL",
      "ktsl_6": "Bài 6 KTTSL",
      "ktsl_7": "Bài 7 KTTSL",
      "ktsl_8": "Bài 8 KTTSL",
    },
  },
};

export default SUBJECTS_DATA;
