// --- KHO DỮ LIỆU ĐỀ THI ---
const LESSONS_DATA = {
  "1": [
    {
      "id": "l1_q1",
      "type": "multiple-choice",
      "text": "Đối tượng nghiên cứu của Kinh tế chính trị Mác - Lênin là:",
      "options": [
        {
          "id": "A",
          "text": "Nguồn gốc của cải và sự giàu có của tư bản chủ nghĩa."
        },
        {
          "id": "B",
          "text": "Các phương thức sản xuất xã hội được đặt trong sự liên hệ biện chứng với trình độ phát triển của lực lượng sản xuất và kiến trúc thượng tầng."
        },
        {
          "id": "C",
          "text": "Sự sản xuất của xã hội."
        },
        {
          "id": "D",
          "text": "Các quan hệ sản xuất và trao đổi được đặt trong sự liên hệ biện chứng với trình độ phát triển của lực lượng sản xuất và kiến trúc thượng tầng."
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l1_q2",
      "type": "multiple-choice",
      "text": "Phương pháp nghiên cứu quan trọng của Kinh tế chính trị Mác – Lênin là:",
      "options": [
        {
          "id": "A",
          "text": "Trừu tượng hóa khoa học."
        },
        {
          "id": "B",
          "text": "Mô hình hóa đối tượng."
        },
        {
          "id": "C",
          "text": "Khảo sát đối tượng và thu thập số liệu."
        },
        {
          "id": "D",
          "text": "Thực nghiệm khoa học."
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l1_q3",
      "type": "multiple-choice",
      "text": "Điều kiện nào là \"điều kiện đủ\" để sản xuất hàng hoá ra đời?",
      "options": [
        {
          "id": "A",
          "text": "Có thị trường phát triển mạnh mẽ."
        },
        {
          "id": "B",
          "text": "Có công cụ lao động tiên tiến."
        },
        {
          "id": "C",
          "text": "Sự tách biệt về mặt kinh tế của các chủ thể sản xuất."
        },
        {
          "id": "D",
          "text": "Có nhà nước quản lý sản xuất."
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l1_q4",
      "type": "multiple-choice",
      "text": "Điều kiện nào được gọi là \"điều kiện cần\" để sản xuất hàng hoá ra đời?",
      "options": [
        {
          "id": "A",
          "text": "Có phân công lao động xã hội."
        },
        {
          "id": "B",
          "text": "Có công cụ lao động hiện đại."
        },
        {
          "id": "C",
          "text": "Có thị trường phát triển sôi động."
        },
        {
          "id": "D",
          "text": "Có nhà nước quản lý xã hội."
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l1_q5",
      "type": "drag-drop-fill",
      "text": "Kéo thả các đáp án khớp với các phát biểu từ 1 đến 4 dưới đây.",
      "items": [
        "điều kiện cần",
        "điều kiện đủ",
        "sản phẩm",
        "chuyên môn hoá"
      ],
      "sentences": [
        {
          "id": "b1",
          "pre": "1. Phân công lao động xã hội là",
          "post": "để nền sản xuất hàng hoá ra đời và phát triển."
        },
        {
          "id": "b2",
          "pre": "2. Sự tách biệt về mặt kinh tế giữa những người sản xuất hàng hoá là",
          "post": "để nền sản xuất hàng hoá ra đời và phát triển."
        },
        {
          "id": "b3",
          "pre": "3. Sản xuất hàng hoá là sản xuất ra",
          "post": "để trao đổi, mua bán."
        },
        {
          "id": "b4",
          "pre": "4. Phân công lao động xã hội là sự phân chia lao động trong xã hội thành các ngành, các lĩnh vực của sản xuất khác nhau, tạo nên sự",
          "post": "của những người sản xuất khác nhau."
        }
      ],
      "correct": {
        "b1": "điều kiện cần",
        "b2": "điều kiện đủ",
        "b3": "sản phẩm",
        "b4": "chuyên môn hoá"
      }
    },
    {
      "id": "l1_q6",
      "type": "multiple-choice",
      "text": "Hàng hoá là gì?",
      "options": [
        {
          "id": "A",
          "text": "Sản phẩm được sản xuất ra để đem bán."
        },
        {
          "id": "B",
          "text": "Sản phẩm của lao động để thoả mãn nhu cầu của con người."
        },
        {
          "id": "C",
          "text": "Sản phẩm của lao động có thể thoả mãn nhu cầu nào đó của con người thông qua trao đổi, mua bán."
        },
        {
          "id": "D",
          "text": "Sản phẩm ở trên thị trường."
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l1_q7",
      "type": "multiple-choice",
      "text": "Giá trị của hàng hoá được quyết định bởi yếu tố nào?",
      "options": [
        {
          "id": "A",
          "text": "Sự hao phí sức lao động của con người."
        },
        {
          "id": "B",
          "text": "Công dụng của hàng hoá."
        },
        {
          "id": "C",
          "text": "Lao động trừu tượng của người sản xuất kết tinh trong hàng hoá."
        },
        {
          "id": "D",
          "text": "Sự khan hiếm của hàng hoá."
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l1_q8",
      "type": "multiple-choice",
      "text": "Hãy chọn phương án trả lời đúng nhất về lượng giá trị của một đơn vị hàng hoá.",
      "options": [
        {
          "id": "A",
          "text": "Phụ thuộc vào cường độ lao động."
        },
        {
          "id": "B",
          "text": "Tỷ lệ thuận với năng suất lao động."
        },
        {
          "id": "C",
          "text": "Tỷ lệ nghịch với cường độ lao động."
        },
        {
          "id": "D",
          "text": "Tỷ lệ nghịch với năng suất lao động."
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l1_q9",
      "type": "multiple-choice",
      "text": "Khi đồng thời tăng năng suất lao động và cường độ lao động lên 2 lần thì ý nào dưới đây là đúng?",
      "options": [
        {
          "id": "A",
          "text": "Tổng số giá trị hàng hoá tăng 2 lần, tổng số hàng hoá tăng 2 lần."
        },
        {
          "id": "B",
          "text": "Giá trị 1 hàng hoá giảm 2 lần, tổng số giá trị hàng hoá tăng 2 lần."
        },
        {
          "id": "C",
          "text": "Tổng số hàng hoá tăng lên 2 lần, giá trị 1 hàng hoá giảm 2 lần."
        },
        {
          "id": "D",
          "text": "Tổng số hàng hoá tăng lên 4 lần, tổng số giá trị hàng hoá tăng lên 4 lần."
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l1_q10",
      "type": "drag-drop-category",
      "text": "Kéo thả các hàng hóa sau đây vào cột tương ứng.",
      "items": [
        "Xe máy",
        "Khóa học trực tuyến",
        "Quần áo",
        "Internet",
        "Điện thoại",
        "Dịch vụ y tế",
        "Sách vở",
        "Sách điện tử"
      ],
      "categories": [
        "Hàng hóa hữu hình",
        "Hàng hóa vô hình"
      ],
      "correct": {
        "cat1": [
          "Xe máy",
          "Quần áo",
          "Điện thoại",
          "Sách vở"
        ],
        "cat2": [
          "Khóa học trực tuyến",
          "Internet",
          "Dịch vụ y tế",
          "Sách điện tử"
        ]
      }
    },
    {
      "id": "l1_q11",
      "type": "true-false-group",
      "context": "Trong 8 giờ công nhân sản xuất được 100 sản phẩm có tổng giá trị là 600 USD. Giá trị của một đơn vị sản phẩm là 6,0 USD. Chọn đáp án (Đúng hoặc Sai) với từng trường hợp sau:",
      "subQuestions": [
        {
          "id": "q11_1",
          "text": "1. Nếu cường độ lao động tăng lên 3 lần thì giá trị của một đơn vị sản phẩm là 3,0 USD.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        },
        {
          "id": "q11_2",
          "text": "2. Nếu cường độ lao động tăng lên 2 lần thì giá trị của một đơn vị sản phẩm là 6,0 USD.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q11_3",
          "text": "3. Nếu năng suất lao động tăng lên 3 lần thì giá trị của một đơn vị sản phẩm là 2,0 USD.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q11_4",
          "text": "4. Nếu năng suất lao động tăng lên 2 lần thì giá trị của một đơn vị sản phẩm là 6,0 USD.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        }
      ]
    },
    {
      "id": "l1_q12",
      "type": "true-false-group",
      "context": "Trong 8 giờ công nhân sản xuất được 100 sản phẩm có tổng giá trị là 300 USD. Giá trị của một đơn vị sản phẩm là 3 USD. Chọn đáp án (Đúng hoặc Sai) với từng trường hợp sau:",
      "subQuestions": [
        {
          "id": "q12_1",
          "text": "1. Nếu năng suất lao động tăng lên 3 lần thì giá trị của một đơn vị sản phẩm là 1,0 USD.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q12_2",
          "text": "2. Nếu năng suất lao động tăng lên 2 lần thì giá trị của một đơn vị sản phẩm là 1,5 USD.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q12_3",
          "text": "3. Nếu năng suất lao động tăng lên 2 lần thì giá trị của một đơn vị sản phẩm là 3 USD.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        },
        {
          "id": "q12_4",
          "text": "4. Nếu năng suất lao động tăng lên 3 lần thì giá trị của một đơn vị sản phẩm là 6,0 USD.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        }
      ]
    },
    {
      "id": "l1_q13",
      "type": "multiple-choice",
      "text": "Sản xuất hàng hoá khác với sản xuất tự nhiên ở điểm nào?",
      "options": [
        {
          "id": "A",
          "text": "Sản xuất hàng hoá hướng đến trao đổi, còn sản xuất tự nhiên là để tự tiêu dùng."
        },
        {
          "id": "B",
          "text": "Sản xuất tự nhiên có năng suất cao hơn."
        },
        {
          "id": "C",
          "text": "Sản xuất hàng hoá không phụ thuộc thị trường."
        },
        {
          "id": "D",
          "text": "Sản xuất tự nhiên gắn với công nghệ cao."
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l1_q14",
      "type": "multiple-choice",
      "text": "Đặc điểm nào sau đây không thuộc về sản xuất hàng hoá?",
      "options": [
        {
          "id": "A",
          "text": "Sản phẩm phục vụ hoàn toàn cho tiêu dùng cá nhân."
        },
        {
          "id": "B",
          "text": "Có sự phân công lao động xã hội."
        },
        {
          "id": "C",
          "text": "Có sự tách biệt tương đối giữa các chủ thể sản xuất."
        },
        {
          "id": "D",
          "text": "Sản phẩm để trao đổi, mua bán."
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l1_q15",
      "type": "multiple-choice",
      "text": "Những chức năng cơ bản của Kinh tế chính trị Mác – Lênin?",
      "options": [
        {
          "id": "A",
          "text": "Chức năng phê phán, chức năng thực tiễn, chức năng phương pháp luận, chức năng tư tưởng."
        },
        {
          "id": "B",
          "text": "Chức năng nhận thức, chức năng thực tiễn, chức năng thông tin, chức năng tư tưởng."
        },
        {
          "id": "C",
          "text": "Chức năng phê phán, chức năng thực tiễn, chức năng thông tin, chức năng tư tưởng."
        },
        {
          "id": "D",
          "text": "Chức năng nhận thức, chức năng thực tiễn, chức năng tư tưởng, chức năng phương pháp luận."
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l1_q16",
      "type": "drag-drop-category",
      "text": "Kéo thả các đặc điểm sau vào cột tương ứng.",
      "items": [
        "Con người có thể thay đổi",
        "Sản phẩm của con người",
        "Tồn tại khách quan",
        "Con người có thể nhận thức và vận dụng"
      ],
      "categories": [
        "Chính sách kinh tế",
        "Quy luật kinh tế"
      ],
      "correct": {
        "cat1": [
          "Con người có thể thay đổi",
          "Sản phẩm của con người"
        ],
        "cat2": [
          "Tồn tại khách quan",
          "Con người có thể nhận thức và vận dụng"
        ]
      }
    },
    {
      "id": "l1_q17",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Những phương pháp nghiên cứu và học tập chủ yếu được sử dụng trong Kinh tế chính trị Mác – Lênin gồm:",
      "options": [
        {
          "id": "A",
          "text": "Logic kết hợp với lịch sử"
        },
        {
          "id": "B",
          "text": "Thí nghiệm trong điều kiện phòng lab"
        },
        {
          "id": "C",
          "text": "Dự báo mô hình kinh tế bằng thuật toán AI"
        },
        {
          "id": "D",
          "text": "Phân tích – tổng hợp và trừu tượng hóa khoa học"
        }
      ],
      "correctAnswers": [
        "A",
        "D"
      ]
    },
    {
      "id": "l1_q18",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Đặc điểm nào phản ánh bản chất của phân công lao động xã hội?",
      "options": [
        {
          "id": "A",
          "text": "Sự phân chia lao động xã hội thành các ngành, nghề, các lĩnh vực kinh tế khác nhau"
        },
        {
          "id": "B",
          "text": "Giúp người sản xuất tự cung tự cấp, tạo ra sản phẩm đáp ứng đủ tất cả nhu cầu của đời sống"
        },
        {
          "id": "C",
          "text": "Tạo ra sự đồng nhất về sản phẩm và giá trị"
        },
        {
          "id": "D",
          "text": "Sự chuyên môn hóa của những người sản xuất"
        }
      ],
      "correctAnswers": [
        "A",
        "D"
      ]
    },
    {
      "id": "l1_q19",
      "type": "true-false-group",
      "context": "Trong 8 giờ công nhân sản xuất được 200 sản phẩm có tổng giá trị là 400 USD. Chọn đáp án (Đúng hoặc Sai):",
      "subQuestions": [
        {
          "id": "q19_1",
          "text": "1. Nếu cường độ lao động tăng lên 2 lần thì tổng giá trị hàng hoá là 800 USD.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q19_2",
          "text": "2. Nếu cường độ lao động tăng lên 3 lần thì tổng giá trị hàng hoá là 400 USD.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        },
        {
          "id": "q19_3",
          "text": "3. Nếu năng suất lao động tăng lên 2 lần thì tổng giá trị hàng hoá là 400 USD.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q19_4",
          "text": "4. Nếu năng suất lao động tăng lên 3 lần thì tổng giá trị hàng hoá là 1.200 USD.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        }
      ]
    },
    {
      "id": "l1_q20",
      "type": "true-false-group",
      "context": "Trong 8 giờ công nhân sản xuất được 200 sản phẩm có tổng giá trị là 600 USD. Giá trị của một đơn vị sản phẩm là 3 USD. Chọn đáp án (Đúng hoặc Sai):",
      "subQuestions": [
        {
          "id": "q20_1",
          "text": "1. Nếu cường độ lao động tăng lên 3 lần thì giá trị của một đơn vị sản phẩm là 9 USD.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        },
        {
          "id": "q20_2",
          "text": "2. Nếu cường độ lao động tăng lên 2 lần thì giá trị của một đơn vị sản phẩm là 6 USD.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        },
        {
          "id": "q20_3",
          "text": "3. Nếu cường độ lao động tăng lên 2 lần thì giá trị của một đơn vị sản phẩm là 3 USD.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q20_4",
          "text": "4. Nếu cường độ lao động tăng lên 3 lần thì giá trị của một đơn vị sản phẩm là 3 USD.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        }
      ]
    },
    {
      "id": "l1_q21",
      "type": "multiple-choice",
      "text": "Sự giống nhau giữa quy luật kinh tế và chính sách kinh tế là:",
      "options": [
        {
          "id": "A",
          "text": "Đều là những hiện tượng tồn tại khách quan."
        },
        {
          "id": "B",
          "text": "Luôn thúc đẩy sự giàu có và văn minh của xã hội."
        },
        {
          "id": "C",
          "text": "Tồn tại khách quan, không phụ thuộc vào suy nghĩ của con người."
        },
        {
          "id": "D",
          "text": "Tồn tại vĩnh viễn cùng với sự tồn tại, phát triển của xã hội loài người."
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l1_q22",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Sản xuất hàng hóa làm phát sinh các mối quan hệ nào sau đây?",
      "options": [
        {
          "id": "A",
          "text": "Quan hệ trao đổi, mua bán giữa các chủ thể sản xuất."
        },
        {
          "id": "B",
          "text": "Quan hệ giữa người với người thông qua sản phẩm hàng hóa."
        },
        {
          "id": "C",
          "text": "Quan hệ giữa con người với thiên nhiên."
        },
        {
          "id": "D",
          "text": "Quan hệ trực tiếp giữa người sản xuất và sản phẩm họ làm ra."
        }
      ],
      "correctAnswers": [
        "A",
        "B"
      ]
    },
    {
      "id": "l1_q23",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Điều kiện ra đời của sản xuất hàng hóa bao gồm:",
      "options": [
        {
          "id": "A",
          "text": "Phân công lao động chung và chế độ sở hữu khác nhau về tư liệu sản xuất."
        },
        {
          "id": "B",
          "text": "Phân công lao động xã hội."
        },
        {
          "id": "C",
          "text": "Phân công lao động cá biệt và chế độ tư hữu về tư liệu sản xuất."
        },
        {
          "id": "D",
          "text": "Sự tách biệt về mặt kinh tế của các chủ thể sản xuất."
        }
      ],
      "correctAnswers": [
        "B",
        "D"
      ]
    },
    {
      "id": "l1_q24",
      "type": "multiple-choice",
      "text": "Trong sản xuất hàng hóa, mục đích chính của người sản xuất là gì?",
      "options": [
        {
          "id": "A",
          "text": "Để phục vụ nhu cầu tiêu dùng cá nhân và gia đình."
        },
        {
          "id": "B",
          "text": "Để tích trữ của cải cho các thế hệ sau."
        },
        {
          "id": "C",
          "text": "Nhằm mục đích trao đổi, mua bán trên thị trường."
        },
        {
          "id": "D",
          "text": "Theo mệnh lệnh từ các cơ quan quản lý nhà nước."
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l1_q25",
      "type": "multiple-choice",
      "text": "Nội dung nào sau đây phản ánh đúng bản chất của \"Phân công lao động xã hội\"?",
      "options": [
        {
          "id": "A",
          "text": "Là sự phân chia lao động trong nội bộ một nhà máy hay một doanh nghiệp."
        },
        {
          "id": "B",
          "text": "Là việc mỗi người tự sản xuất mọi thứ để đáp ứng nhu cầu của mình."
        },
        {
          "id": "C",
          "text": "Là sự phân chia lao động xã hội thành các ngành, các lĩnh vực sản xuất khác nhau."
        },
        {
          "id": "D",
          "text": "Là sự phân chia lao động theo độ tuổi và giới tính của người lao động."
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l1_q26",
      "type": "multiple-choice",
      "text": "Phân công lao động xã hội tạo ra sự biến đổi nào đối với người sản xuất?",
      "options": [
        {
          "id": "A",
          "text": "Làm cho người sản xuất trở nên độc lập hoàn toàn, không cần trao đổi."
        },
        {
          "id": "B",
          "text": "Làm cho người sản xuất có thể tự cung tự cấp mọi sản phẩm."
        },
        {
          "id": "C",
          "text": "Tạo nên sự chuyên môn hóa của những người sản xuất vào các ngành nghề khác nhau."
        },
        {
          "id": "D",
          "text": "Làm giảm năng suất lao động do quá trình sản xuất bị chia nhỏ."
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l1_q27",
      "type": "multiple-choice",
      "text": "Văn hóa thương hiệu có thể được hiểu là:",
      "options": [
        {
          "id": "A",
          "text": "Các chiến dịch quảng cáo rầm rộ trên mạng xã hội."
        },
        {
          "id": "B",
          "text": "Tên gọi và logo được thiết kế bắt mắt của doanh nghiệp."
        },
        {
          "id": "C",
          "text": "Những giá trị, niềm tin và cách thức thương hiệu tương tác với nhân viên và khách hàng."
        },
        {
          "id": "D",
          "text": "Các hoạt động từ thiện và bảo vệ môi trường của doanh nghiệp."
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l1_q28",
      "type": "multiple-choice",
      "text": "Đặc điểm nào sau đây KHÔNG thuộc về sản xuất hàng hóa?",
      "options": [
        {
          "id": "A",
          "text": "Có sự phân công lao động xã hội."
        },
        {
          "id": "B",
          "text": "Sản phẩm phục vụ hoàn toàn cho tiêu dùng cá nhân của người sản xuất."
        },
        {
          "id": "C",
          "text": "Có sự tách biệt tương đối giữa các chủ thể sản xuất."
        },
        {
          "id": "D",
          "text": "Sản phẩm được sản xuất ra để trao đổi, mua bán."
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l1_q29",
      "type": "multiple-choice",
      "text": "Một sản phẩm của lao động chỉ trở thành hàng hóa khi nó:",
      "options": [
        {
          "id": "A",
          "text": "Có ích cho người sản xuất ra nó."
        },
        {
          "id": "B",
          "text": "Được trưng bày trong các cửa hàng."
        },
        {
          "id": "C",
          "text": "Có thể thỏa mãn nhu cầu con người thông qua trao đổi, mua bán."
        },
        {
          "id": "D",
          "text": "Có giá trị sử dụng cao đối với mọi người."
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l1_q30",
      "type": "multiple-choice",
      "text": "Chức năng nào sau đây là chức năng cơ bản của Kinh tế chính trị Mác - Lênin?",
      "options": [
        {
          "id": "A",
          "text": "Chức năng phê phán, thực tiễn, thông tin và tư tưởng."
        },
        {
          "id": "B",
          "text": "Chức năng nhận thức, thực tiễn, thông tin và tư tưởng."
        },
        {
          "id": "C",
          "text": "Chức năng nhận thức, thực tiễn, tư tưởng và phương pháp luận."
        },
        {
          "id": "D",
          "text": "Chức năng dự báo, thực tiễn, tư tưởng và phương pháp luận."
        }
      ],
      "correctAnswer": "C"
    }
  ],
  "2": [
    {
      "id": "l2_q1",
      "type": "true-false-group",
      "context": "Cho biết chi phí tư bản khả biến là 2000 usd. Chọn đáp án (Đúng hoặc Sai) với từng trường hợp sau:",
      "subQuestions": [
        {
          "id": "q2_1_1",
          "text": "1. Nếu m'=300% thì khối lượng giá trị mới do công nhân tạo ra là 7000 usd",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q2_1_2",
          "text": "2. Nếu m'=400% thì khối lượng giá trị mới do công nhân tạo ra là 8000 usd",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q2_1_3",
          "text": "3. Nếu m'=100% thì khối lượng giá trị mới do công nhân tạo ra là 4000 usd",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q2_1_4",
          "text": "4. Nếu m'=200% thì khối lượng giá trị mới do công nhân tạo ra là 6000 usd",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        }
      ]
    },
    {
      "id": "l2_q2",
      "type": "true-false-group",
      "context": "Cho biết tư bản bất biến c=1.200 USD, tỷ suất giá trị thặng dư m'=200%. Chọn đáp án (Đúng hoặc Sai):",
      "subQuestions": [
        {
          "id": "q2_2_1",
          "text": "1. Với cấu tạo hữu cơ c/v=4/1 thì giá trị hàng hoá là 1.800 USD",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        },
        {
          "id": "q2_2_2",
          "text": "2. Với cấu tạo hữu cơ c/v=3/1 thì giá trị hàng hoá là 2.400 USD",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q2_2_3",
          "text": "3. Với cấu tạo hữu cơ c/v=2/1 thì giá trị hàng hoá là 3.000 USD",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q2_2_4",
          "text": "4. Với cấu tạo hữu cơ c/v=4/1 thì giá trị hàng hoá là 2.000 USD",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        }
      ]
    },
    {
      "id": "l2_q3",
      "type": "true-false-group",
      "context": "Cho biết tư bản bất biến c=1.500 USD, tỷ suất giá trị thặng dư m'=100%. Chọn đáp án (Đúng hoặc Sai):",
      "subQuestions": [
        {
          "id": "q2_3_1",
          "text": "1. Với cấu tạo hữu cơ c/v=3/1 thì giá trị hàng hoá là 2.500 USD",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q2_3_2",
          "text": "2. Với cấu tạo hữu cơ c/v=2/1 thì giá trị hàng hoá là 3.000 USD",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q2_3_3",
          "text": "3. Với cấu tạo hữu cơ c/v=3/1 thì giá trị hàng hoá là 2.600 USD",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        },
        {
          "id": "q2_3_4",
          "text": "4. Với cấu tạo hữu cơ c/v=5/1 thì giá trị hàng hoá là 2.250 USD",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        }
      ]
    },
    {
      "id": "l2_q4",
      "type": "multiple-choice",
      "text": "Dựa vào căn cứ nào để chia tư bản thành tư bản bất biến và tư bản khả biến?",
      "options": [
        {
          "id": "A",
          "text": "Hao mòn hữu hình hoặc vô hình"
        },
        {
          "id": "B",
          "text": "Phương thức chuyển giá trị các bộ phận tư bản sang sản phẩm"
        },
        {
          "id": "C",
          "text": "Tốc độ chu chuyển của tư bản"
        },
        {
          "id": "D",
          "text": "Vai trò các bộ phận tư bản trong quá trình sản xuất giá trị thặng dư"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l2_q5",
      "type": "multiple-choice",
      "text": "Dựa vào căn cứ nào để chia tư bản ra thành tư bản cố định và tư bản lưu động?",
      "options": [
        {
          "id": "A",
          "text": "Phương thức chuyển giá trị của các bộ phận tư bản sang sản phẩm"
        },
        {
          "id": "B",
          "text": "Vai trò các bộ phận tư bản trong quá trình sản xuất giá trị thặng dư"
        },
        {
          "id": "C",
          "text": "Tốc độ chu chuyển chung của tư bản"
        },
        {
          "id": "D",
          "text": "Sự thay đổi về lượng trong quá trình sản xuất"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l2_q6",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Đâu là thuộc tính của hàng hoá sức lao động?",
      "options": [
        {
          "id": "A",
          "text": "Giá trị sử dụng của hàng hoá sức lao động"
        },
        {
          "id": "B",
          "text": "Giá trị thặng dư"
        },
        {
          "id": "C",
          "text": "Thuộc tính sử dụng của hàng hoá sức lao động"
        },
        {
          "id": "D",
          "text": "Giá trị của hàng hoá sức lao động"
        }
      ],
      "correctAnswers": [
        "A",
        "D"
      ]
    },
    {
      "id": "l2_q7",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Để đạt được giá trị thặng dư siêu ngạch, doanh nghiệp cần:",
      "options": [
        {
          "id": "A",
          "text": "Bán hàng hóa với giá trị cao hơn cả giá trị xã hội"
        },
        {
          "id": "B",
          "text": "Trả lương công nhân cao hơn mức quy định"
        },
        {
          "id": "C",
          "text": "Sản xuất ra hàng hóa có giá trị thấp hơn mức trung bình xã hội"
        },
        {
          "id": "D",
          "text": "Áp dụng công nghệ mới sớm hơn đối thủ cạnh tranh"
        }
      ],
      "correctAnswers": [
        "C",
        "D"
      ]
    },
    {
      "id": "l2_q8",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Điều kiện để nhà tư bản thu được giá trị thặng dư siêu ngạch là:",
      "options": [
        {
          "id": "A",
          "text": "Sản phẩm sản xuất ra có giá trị thấp hơn giá trị xã hội nhưng vẫn bán theo giá thị trường"
        },
        {
          "id": "B",
          "text": "Tổ chức sản xuất theo lối thủ công truyền thống"
        },
        {
          "id": "C",
          "text": "Năng suất lao động cá biệt cao hơn mức trung bình của xã hội"
        },
        {
          "id": "D",
          "text": "Tăng ngày lao động của công nhân"
        }
      ],
      "correctAnswers": [
        "A",
        "C"
      ]
    },
    {
      "id": "l2_q9",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Điều kiện để sức lao động trở thành hàng hoá là:",
      "options": [
        {
          "id": "A",
          "text": "Người lao động có học vấn cao"
        },
        {
          "id": "B",
          "text": "Người lao động không có tư liệu sản xuất"
        },
        {
          "id": "C",
          "text": "Người lao động được tự do về thân thể"
        },
        {
          "id": "D",
          "text": "Nhà tư bản có quyền ra lệnh"
        }
      ],
      "correctAnswers": [
        "B",
        "C"
      ]
    },
    {
      "id": "l2_q10",
      "type": "multiple-choice",
      "text": "Giá trị thặng dư siêu ngạch còn được gọi là:",
      "options": [
        {
          "id": "A",
          "text": "Hình thức biến tướng của giá trị thặng dư tuyệt đối."
        },
        {
          "id": "B",
          "text": "Hình thức biểu hiện của giá trị thặng dư tương đối."
        },
        {
          "id": "C",
          "text": "Hình thức biến tướng của sản phẩm thặng dư tương đối."
        },
        {
          "id": "D",
          "text": "Hình thức biến tướng của giá trị thặng dư tương đối."
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l2_q11",
      "type": "multiple-choice",
      "text": "Giá trị thặng dư là gì?",
      "options": [
        {
          "id": "A",
          "text": "Giá trị của tư bản tự tăng lên"
        },
        {
          "id": "B",
          "text": "Hiệu số giữa giá trị hàng hoá với chi phí sản xuất tư bản chủ nghĩa"
        },
        {
          "id": "C",
          "text": "Phần giá trị mới dôi ra ngoài giá trị sức lao động do người công nhân làm thuê tạo ra"
        },
        {
          "id": "D",
          "text": "Lợi nhuận thu được của người sản xuất kinh doanh"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l2_q12",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Hao mòn tư bản cố định có các loại nào?",
      "options": [
        {
          "id": "A",
          "text": "Hao mòn vật chất"
        },
        {
          "id": "B",
          "text": "Hao mòn tự nhiên"
        },
        {
          "id": "C",
          "text": "Hao mòn vô hình"
        },
        {
          "id": "D",
          "text": "Hao mòn hữu hình"
        }
      ],
      "correctAnswers": [
        "C",
        "D"
      ]
    },
    {
      "id": "l2_q13",
      "type": "multiple-choice",
      "text": "Khi nào tiền tệ biến thành tư bản?",
      "options": [
        {
          "id": "A",
          "text": "Dùng tiền để buôn bán mua rẻ, bán đắt"
        },
        {
          "id": "B",
          "text": "Dùng tiền đầu tư vào sản xuất kinh doanh"
        },
        {
          "id": "C",
          "text": "Có lượng tiền tệ đủ lớn"
        },
        {
          "id": "D",
          "text": "Sức lao động trở thành hàng hoá"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l2_q14",
      "type": "multiple-choice",
      "text": "Nguồn gốc chủ yếu của tích lũy tư bản là:",
      "options": [
        {
          "id": "A",
          "text": "Giá trị thặng dư"
        },
        {
          "id": "B",
          "text": "Tiền huy động"
        },
        {
          "id": "C",
          "text": "Sản phẩm thặng dư"
        },
        {
          "id": "D",
          "text": "Tiền đi vay"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l2_q15",
      "type": "multiple-choice",
      "text": "Phương pháp sản xuất giá trị thặng dư tuyệt đối có hạn chế gì?",
      "options": [
        {
          "id": "A",
          "text": "Không áp dụng cho doanh nghiệp nhỏ"
        },
        {
          "id": "B",
          "text": "Không tạo ra lợi nhuận"
        },
        {
          "id": "C",
          "text": "Không bị ảnh hưởng bởi pháp luật"
        },
        {
          "id": "D",
          "text": "Bị giới hạn bởi thời gian sinh học của con người"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l2_q16",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Phương pháp sản xuất giá trị thặng dư tuyệt đối chủ yếu dựa vào biện pháp nào?",
      "options": [
        {
          "id": "A",
          "text": "Không thay đổi năng suất lao động nhưng kéo dài ngày lao động"
        },
        {
          "id": "B",
          "text": "Kéo dài thời gian lao động vượt quá thời gian lao động tất yếu"
        },
        {
          "id": "C",
          "text": "Rút ngắn thời gian lao động tất yếu"
        },
        {
          "id": "D",
          "text": "Tăng năng suất lao động trong ngành sản xuất tư liệu sinh hoạt"
        }
      ],
      "correctAnswers": [
        "A",
        "B"
      ]
    },
    {
      "id": "l2_q17",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Phương pháp sản xuất giá trị thặng dư tuyệt đối là:",
      "options": [
        {
          "id": "A",
          "text": "Kéo dài ngày lao động vượt quá thời gian lao động tất yếu"
        },
        {
          "id": "B",
          "text": "Năng suất lao động, giá trị sức lao động không đổi và thời gian lao động tất yếu không đổi"
        },
        {
          "id": "C",
          "text": "Tiết kiệm chi phí sản xuất"
        },
        {
          "id": "D",
          "text": "Sử dụng kỹ thuật tiên tiến"
        }
      ],
      "correctAnswers": [
        "A",
        "B"
      ]
    },
    {
      "id": "l2_q18",
      "type": "true-false-group",
      "context": "Tư bản đầu tư là 900 USD, trong đó số tư bản đầu tư vào tư liệu sản xuất là 600 USD. Chọn đáp án (Đúng hoặc Sai):",
      "subQuestions": [
        {
          "id": "q2_18_1",
          "text": "1. Với m'=200% thì giá trị hàng hoá là 1.500 USD",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q2_18_2",
          "text": "2. Với m'=200% thì giá trị hàng hoá là 1.800 USD",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        },
        {
          "id": "q2_18_3",
          "text": "3. Với m'=100% thì giá trị hàng hoá là 1.500 USD",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        },
        {
          "id": "q2_18_4",
          "text": "4. Với m'=300% thì giá trị hàng hoá là 2.000 USD",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        }
      ]
    },
    {
      "id": "l2_q19",
      "type": "multiple-choice",
      "text": "Tỷ suất giá trị thặng dư (m') phản ánh điều gì?",
      "options": [
        {
          "id": "A",
          "text": "Hiệu quả của nhà tư bản"
        },
        {
          "id": "B",
          "text": "Trình độ bóc lột của tư bản đối với công nhân làm thuê"
        },
        {
          "id": "C",
          "text": "Số lượng giá trị thặng dư"
        },
        {
          "id": "D",
          "text": "Quy mô bóc lột của nhà tư bản đối với người công nhân làm thuê"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l2_q20",
      "type": "multiple-choice",
      "text": "Ý nào đúng nhất về tư bản bất biến (c)?",
      "options": [
        {
          "id": "A",
          "text": "Giá trị của nó không thay đổi và được chuyển ngay sang sản phẩm sau một chu kỳ sản xuất"
        },
        {
          "id": "B",
          "text": "Giá trị của nó không thay đổi về lượng và được chuyển nguyên vẹn sang sản phẩm"
        },
        {
          "id": "C",
          "text": "Giá trị của nó lớn lên trong quá trình sản xuất"
        },
        {
          "id": "D",
          "text": "Giá trị của nó chuyển dần vào sản phẩm qua khấu hao"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l2_q21",
      "type": "multiple-choice",
      "text": "Sức lao động trở thành hàng hóa một cách phổ biến từ khi nào?",
      "options": [
        {
          "id": "A",
          "text": "Trong nền sản xuất hàng hóa giản đơn"
        },
        {
          "id": "B",
          "text": "Trong xã hội chiếm hữu nô lệ"
        },
        {
          "id": "C",
          "text": "Trong nền sản xuất tư bản chủ nghĩa"
        },
        {
          "id": "D",
          "text": "Trong xã hội phong kiến"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l2_q22",
      "type": "multiple-choice",
      "text": "Để sức lao động trở thành hàng hóa, cần có hai điều kiện cơ bản là:",
      "options": [
        {
          "id": "A",
          "text": "Người lao động được tự do và có tư liệu sản xuất"
        },
        {
          "id": "B",
          "text": "Người lao động được tự do về thân thể và không có tư liệu sản xuất"
        },
        {
          "id": "C",
          "text": "Người lao động có trình độ cao và có nhu cầu bán sức lao động"
        },
        {
          "id": "D",
          "text": "Nhà tư bản có vốn và người lao động cần việc làm"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l2_q23",
      "type": "multiple-choice",
      "text": "Giá trị của hàng hóa sức lao động được xác định bởi:",
      "options": [
        {
          "id": "A",
          "text": "Lượng giá trị mới do công nhân tạo ra trong quá trình làm việc"
        },
        {
          "id": "B",
          "text": "Sự thỏa thuận trên thị trường giữa chủ và thợ"
        },
        {
          "id": "C",
          "text": "Lượng lao động xã hội cần thiết để sản xuất và tái sản xuất ra sức lao động"
        },
        {
          "id": "D",
          "text": "Hiệu suất công việc mà người lao động đóng góp cho doanh nghiệp"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l2_q24",
      "type": "multiple-choice",
      "text": "Điểm khác biệt lớn nhất giữa hàng hóa sức lao động và hàng hóa thông thường là gì?",
      "options": [
        {
          "id": "A",
          "text": "Giá trị của nó không thay đổi trong quá trình tiêu dùng"
        },
        {
          "id": "B",
          "text": "Càng tiêu dùng thì giá trị của nó càng giảm dần"
        },
        {
          "id": "C",
          "text": "Khi sử dụng, nó tạo ra giá trị mới lớn hơn giá trị của bản thân nó"
        },
        {
          "id": "D",
          "text": "Nó không thể được mua bán trên thị trường"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l2_q25",
      "type": "multiple-choice",
      "text": "Theo C.Mác, Tư bản là gì?",
      "options": [
        {
          "id": "A",
          "text": "Là tiền và các phương tiện máy móc dùng để sản xuất"
        },
        {
          "id": "B",
          "text": "Là giá trị mang lại giá trị thặng dư bằng cách bóc lột công nhân làm thuê"
        },
        {
          "id": "C",
          "text": "Là nguồn vốn tích lũy của các cá nhân trong xã hội"
        },
        {
          "id": "D",
          "text": "Là công cụ lao động được hiện đại hóa trong công nghiệp"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l2_q26",
      "type": "multiple-choice",
      "text": "Tư bản bất biến (c) được hiểu là:",
      "options": [
        {
          "id": "A",
          "text": "Bộ phận tư bản dùng để thuê mướn nhân công"
        },
        {
          "id": "B",
          "text": "Bộ phận tư bản dùng để mua tư liệu sản xuất (máy móc, nguyên liệu)"
        },
        {
          "id": "C",
          "text": "Bộ phận tư bản có sự biến đổi về mặt giá trị trong sản xuất"
        },
        {
          "id": "D",
          "text": "Bộ phận tư bản dùng để trả tiền lương cho người lao động"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l2_q27",
      "type": "multiple-choice",
      "text": "Tư bản khả biến (v) có đặc điểm nào sau đây?",
      "options": [
        {
          "id": "A",
          "text": "Giá trị của nó được chuyển nguyên vẹn vào sản phẩm mới"
        },
        {
          "id": "B",
          "text": "Giá trị của nó không thay đổi về lượng trong quá trình sản xuất"
        },
        {
          "id": "C",
          "text": "Giá trị của nó tăng lên về lượng thông qua việc tạo ra giá trị thặng dư"
        },
        {
          "id": "D",
          "text": "Nó bao gồm toàn bộ nhà xưởng và thiết bị sản xuất"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l2_q28",
      "type": "multiple-choice",
      "text": "Tư bản cố định bao gồm những yếu tố nào?",
      "options": [
        {
          "id": "A",
          "text": "Máy móc, nhà xưởng, thiết bị sản xuất"
        },
        {
          "id": "B",
          "text": "Nguyên liệu, nhiên liệu, vật liệu phụ"
        },
        {
          "id": "C",
          "text": "Tiền lương trả cho công nhân và nhân viên"
        },
        {
          "id": "D",
          "text": "Toàn bộ các yếu tố của tư bản bất biến"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l2_q29",
      "type": "multiple-choice",
      "text": "Tư bản lưu động là bộ phận tư bản bao gồm:",
      "options": [
        {
          "id": "A",
          "text": "Máy móc, thiết bị và tiền lương"
        },
        {
          "id": "B",
          "text": "Chỉ bao gồm tiền lương (tư bản khả biến)"
        },
        {
          "id": "C",
          "text": "Nguyên liệu, nhiên liệu, vật liệu phụ và tiền lương"
        },
        {
          "id": "D",
          "text": "Nhà xưởng và nguyên vật liệu sản xuất"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l2_q30",
      "type": "multiple-choice",
      "text": "Tỷ suất giá trị thặng dư (m') phản ánh điều gì?",
      "options": [
        {
          "id": "A",
          "text": "Hiệu quả kinh doanh của nhà tư bản"
        },
        {
          "id": "B",
          "text": "Trình độ bóc lột của tư bản đối với công nhân làm thuê"
        },
        {
          "id": "C",
          "text": "Quy mô bóc lột của nhà tư bản"
        },
        {
          "id": "D",
          "text": "Tổng số lợi nhuận thu được sau một chu kỳ sản xuất"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l2_q31",
      "type": "multiple-choice",
      "text": "Khối lượng giá trị thặng dư (M) phản ánh điều gì?",
      "options": [
        {
          "id": "A",
          "text": "Trình độ bóc lột của nhà tư bản"
        },
        {
          "id": "B",
          "text": "Quy mô bóc lột của tư bản đối với công nhân làm thuê"
        },
        {
          "id": "C",
          "text": "Hiệu suất sử dụng máy móc thiết bị"
        },
        {
          "id": "D",
          "text": "Tỷ lệ giữa tư bản bất biến và tư bản khả biến"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l2_q32",
      "type": "multiple-choice",
      "text": "Công thức tính khối lượng giá trị thặng dư (M) là:",
      "options": [
        {
          "id": "A",
          "text": "M = m' . V"
        },
        {
          "id": "B",
          "text": "M = m' / V"
        },
        {
          "id": "C",
          "text": "M = (c + v) . m'"
        },
        {
          "id": "D",
          "text": "M = v / m'"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l2_q33",
      "type": "multiple-choice",
      "text": "Giá trị của một đơn vị hàng hóa được tính theo công thức nào?",
      "options": [
        {
          "id": "A",
          "text": "G = c + v"
        },
        {
          "id": "B",
          "text": "G = c + v + m"
        },
        {
          "id": "C",
          "text": "G = c + m"
        },
        {
          "id": "D",
          "text": "G = k + p"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l2_q34",
      "type": "multiple-choice",
      "text": "Trong quá trình sản xuất, lao động cụ thể của người công nhân có vai trò:",
      "options": [
        {
          "id": "A",
          "text": "Bảo tồn và chuyển giá trị cũ (c) vào sản phẩm mới"
        },
        {
          "id": "B",
          "text": "Tạo ra giá trị thặng dư cho nhà tư bản"
        },
        {
          "id": "C",
          "text": "Tạo ra giá trị mới (v + m) của hàng hóa"
        },
        {
          "id": "D",
          "text": "Làm tăng giá trị của tư liệu sản xuất"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l2_q35",
      "type": "multiple-choice",
      "text": "Trong quá trình sản xuất, lao động trừu tượng của người công nhân có vai trò:",
      "options": [
        {
          "id": "A",
          "text": "Chuyển giá trị cũ của máy móc vào sản phẩm"
        },
        {
          "id": "B",
          "text": "Tạo ra giá trị mới (v + m) của hàng hóa"
        },
        {
          "id": "C",
          "text": "Làm thay đổi hình thái tự nhiên của vật chất"
        },
        {
          "id": "D",
          "text": "Bảo tồn các yếu tố của tư bản bất biến"
        }
      ],
      "correctAnswer": "B"
    }
  ],
  "3": [
    {
      "id": "l3_q1",
      "type": "multiple-choice",
      "text": "Nguyên nhân chính dẫn đến sự hình thành độc quyền là?",
      "options": [
        {
          "id": "A",
          "text": "Tích tụ và tập trung sản xuất do cạnh tranh và khoa học kỹ thuật"
        },
        {
          "id": "B",
          "text": "Sự suy thoái của hệ thống ngân hàng"
        },
        {
          "id": "C",
          "text": "Giảm năng suất lao động xã hội"
        },
        {
          "id": "D",
          "text": "Sự phát triển của các doanh nghiệp nhỏ"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l3_q2",
      "type": "multiple-choice",
      "text": "Cạnh tranh nội bộ trong độc quyền xảy ra giữa những ai?",
      "options": [
        {
          "id": "A",
          "text": "Giữa độc quyền và doanh nghiệp nhỏ"
        },
        {
          "id": "B",
          "text": "Giữa các tổ chức độc quyền"
        },
        {
          "id": "C",
          "text": "Giữa các ngành công nghiệp khác nhau"
        },
        {
          "id": "D",
          "text": "Giữa các thành viên trong một tổ chức độc quyền"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l3_q3",
      "type": "multiple-choice",
      "text": "Động lực chính của cạnh tranh trong độc quyền là gì?",
      "options": [
        {
          "id": "A",
          "text": "Giảm giá trị thặng dư"
        },
        {
          "id": "B",
          "text": "Tăng giá trị thặng dư và lợi nhuận"
        },
        {
          "id": "C",
          "text": "Tăng chi phí tiêu dùng cá nhân"
        },
        {
          "id": "D",
          "text": "Giảm quy mô sản xuất"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l3_q4",
      "type": "multiple-choice",
      "text": "Tư bản tài chính được hình thành như thế nào?",
      "options": [
        {
          "id": "A",
          "text": "Từ sự giảm quy mô tích lũy tư bản"
        },
        {
          "id": "B",
          "text": "Từ sự tách biệt giữa công nghiệp và ngân hàng"
        },
        {
          "id": "C",
          "text": "Từ sự dung hợp giữa độc quyền công nghiệp và ngân hàng"
        },
        {
          "id": "D",
          "text": "Từ việc xuất khẩu hàng hóa ra nước ngoài"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l3_q5",
      "type": "multiple-choice",
      "text": "Xuất khẩu tư bản nhằm mục đích gì trong chủ nghĩa tư bản?",
      "options": [
        {
          "id": "A",
          "text": "Tăng năng suất lao động trong nước"
        },
        {
          "id": "B",
          "text": "Giảm sự phụ thuộc vào thị trường quốc tế"
        },
        {
          "id": "C",
          "text": "Giảm chi phí sản xuất trong nước"
        },
        {
          "id": "D",
          "text": "Chiếm đoạt giá trị thặng dư ở nước ngoài"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l3_q6",
      "type": "multiple-choice",
      "text": "Hình thức độc quyền thấp nhất là gì?",
      "options": [
        {
          "id": "A",
          "text": "Cartel"
        },
        {
          "id": "B",
          "text": "Syndicate"
        },
        {
          "id": "C",
          "text": "Trust"
        },
        {
          "id": "D",
          "text": "Consortium"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l3_q7",
      "type": "multiple-choice",
      "text": "Tư bản tài phiệt có vai trò gì trong nền kinh tế độc quyền?",
      "options": [
        {
          "id": "A",
          "text": "Chi phối kinh tế và chính trị"
        },
        {
          "id": "B",
          "text": "Tăng cạnh tranh tự do"
        },
        {
          "id": "C",
          "text": "Giảm xuất khẩu tư bản"
        },
        {
          "id": "D",
          "text": "Giảm sự tập trung tư bản"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l3_q8",
      "type": "multiple-choice",
      "text": "Đặc điểm nào sau đây là cốt lõi của độc quyền?",
      "options": [
        {
          "id": "A",
          "text": "Giảm tích tụ và tập trung tư bản"
        },
        {
          "id": "B",
          "text": "Giảm xuất khẩu tư bản"
        },
        {
          "id": "C",
          "text": "Quy mô tích tụ và tập trung tư bản lớn"
        },
        {
          "id": "D",
          "text": "Tăng cạnh tranh tự do"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l3_q9",
      "type": "true-false-group",
      "context": "Điền kết quả (Đúng hoặc Sai) ứng với từng phát biểu dưới đây:",
      "subQuestions": [
        {
          "id": "q3_9_1",
          "text": "1. Cartel là hình thức độc quyền cao nhất",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        },
        {
          "id": "q3_9_2",
          "text": "2. Xuất khẩu tư bản nhằm chiếm đoạt giá trị thặng dư",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q3_9_3",
          "text": "3. Tư bản tài chính hình thành từ dung hợp công nghiệp và ngân hàng",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q3_9_4",
          "text": "4. Tư bản tài phiệt không chi phối chính trị",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        }
      ]
    },
    {
      "id": "l3_q10",
      "type": "multiple-choice",
      "text": "Vai trò tích cực nào sau đây của chủ nghĩa tư bản?",
      "options": [
        {
          "id": "A",
          "text": "Làm sâu sắc phân hóa giàu nghèo"
        },
        {
          "id": "B",
          "text": "Tăng năng suất lao động và sản xuất lớn"
        },
        {
          "id": "C",
          "text": "Gây ra chiến tranh và xung đột"
        },
        {
          "id": "D",
          "text": "Kim hãm tiến bộ khoa học kỹ thuật"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l3_q11",
      "type": "multiple-choice",
      "text": "Kinh tế tri thức là thành tựu của chủ nghĩa tư bản ở khía cạnh nào?",
      "options": [
        {
          "id": "A",
          "text": "Gây ra khủng hoảng kinh tế"
        },
        {
          "id": "B",
          "text": "Phát triển dựa trên khoa học và công nghệ"
        },
        {
          "id": "C",
          "text": "Giảm sự phụ thuộc vào khoa học kỹ thuật"
        },
        {
          "id": "D",
          "text": "Tăng phân hóa giàu nghèo"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l3_q12",
      "type": "true-false-group",
      "context": "Điền kết quả (Đúng hoặc Sai) ứng với từng phát biểu dưới đây:",
      "subQuestions": [
        {
          "id": "q3_12_1",
          "text": "1. Xã hội hóa lao động làm giảm hợp tác sản xuất",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        },
        {
          "id": "q3_12_2",
          "text": "2. Kinh tế tri thức là thành tựu của chủ nghĩa tư bản",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q3_12_3",
          "text": "3. Chủ nghĩa tư bản gây bần cùng hóa người lao động",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q3_12_4",
          "text": "4. Chiến tranh không liên quan đến cạnh tranh thị trường",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        }
      ]
    },
    {
      "id": "l3_q13",
      "type": "multiple-select",
      "text": "Chọn 3 phương án trả lời đúng. Những hạn chế nào sau đây của chủ nghĩa tư bản?",
      "options": [
        {
          "id": "A",
          "text": "Mục đích của nền sản xuất tập trung chủ yếu vì lợi ích của thiểu số giai cấp tư sản"
        },
        {
          "id": "B",
          "text": "Tăng năng suất lao động"
        },
        {
          "id": "C",
          "text": "Gây chiến tranh và xung đột"
        },
        {
          "id": "D",
          "text": "Phân hóa giàu nghèo"
        }
      ],
      "correctAnswers": [
        "A",
        "C",
        "D"
      ]
    },
    {
      "id": "l3_q14",
      "type": "multiple-select",
      "text": "Chọn 3 phương án trả lời đúng. Những vai trò tích cực nào thuộc về chủ nghĩa tư bản?",
      "options": [
        {
          "id": "A",
          "text": "Giải phóng loài người khỏi \"đêm trường trung cổ\" của xã hội phong kiến"
        },
        {
          "id": "B",
          "text": "Xã hội hóa sản xuất"
        },
        {
          "id": "C",
          "text": "Tăng năng suất lao động"
        },
        {
          "id": "D",
          "text": "Gây chiến tranh và xung đột"
        }
      ],
      "correctAnswers": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "l3_q15",
      "type": "multiple-choice",
      "text": "Nguyên nhân sâu xa dẫn đến sự ra đời của độc quyền là gì?",
      "options": [
        {
          "id": "A",
          "text": "Sự can thiệp trực tiếp của nhà nước vào kinh tế"
        },
        {
          "id": "B",
          "text": "Sự xuất hiện của các doanh nghiệp vừa và nhỏ"
        },
        {
          "id": "C",
          "text": "Sự tích tụ và tập trung sản xuất do cạnh tranh và tác động của khoa học kỹ thuật"
        },
        {
          "id": "D",
          "text": "Sự sụt giảm của năng suất lao động xã hội"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l3_q16",
      "type": "multiple-choice",
      "text": "Trong giai đoạn độc quyền, cạnh tranh không bị mất đi mà ngược lại:",
      "options": [
        {
          "id": "A",
          "text": "Trở nên đơn giản và dễ dự báo hơn"
        },
        {
          "id": "B",
          "text": "Chỉ diễn ra giữa các doanh nghiệp nhỏ với nhau"
        },
        {
          "id": "C",
          "text": "Trở nên gay gắt và quyết liệt hơn giữa các tổ chức độc quyền"
        },
        {
          "id": "D",
          "text": "Được nhà nước điều tiết hoàn toàn bằng pháp luật"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l3_q17",
      "type": "multiple-choice",
      "text": "Hình thức độc quyền nào là sự liên minh ký kết hiệp nghị thỏa thuận về giá cả, quy mô sản xuất và thị trường tiêu thụ?",
      "options": [
        {
          "id": "A",
          "text": "Cartel"
        },
        {
          "id": "B",
          "text": "Syndicate"
        },
        {
          "id": "C",
          "text": "Trust"
        },
        {
          "id": "D",
          "text": "Consortium"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l3_q18",
      "type": "multiple-choice",
      "text": "Điểm khác biệt cơ bản giữa Syndicate và Cartel là gì?",
      "options": [
        {
          "id": "A",
          "text": "Syndicate không thỏa thuận về quy mô sản xuất"
        },
        {
          "id": "B",
          "text": "Syndicate có đầu mối quản lý việc lưu thông (mua nguyên liệu và bán hàng hóa) chung"
        },
        {
          "id": "C",
          "text": "Cartel là hình thức độc quyền cao hơn Syndicate"
        },
        {
          "id": "D",
          "text": "Syndicate chỉ tồn tại trong lĩnh vực ngân hàng"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l3_q19",
      "type": "multiple-choice",
      "text": "Tư bản tài chính là kết quả của quá trình nào sau đây?",
      "options": [
        {
          "id": "A",
          "text": "Sự hợp nhất của các ngân hàng thương mại nhỏ"
        },
        {
          "id": "B",
          "text": "Sự tách rời giữa sản xuất công nghiệp và hoạt động tài chính"
        },
        {
          "id": "C",
          "text": "Sự dung hợp giữa độc quyền công nghiệp và độc quyền ngân hàng"
        },
        {
          "id": "D",
          "text": "Sự quản lý vốn tập trung của nhà nước"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l3_q20",
      "type": "multiple-choice",
      "text": "Chế độ tham dự là phương thức thống trị của các đầu sỏ tài chính thông qua:",
      "options": [
        {
          "id": "A",
          "text": "Việc tham gia trực tiếp vào các cuộc bầu cử chính trị"
        },
        {
          "id": "B",
          "text": "Việc kiểm soát các hoạt động văn hóa xã hội"
        },
        {
          "id": "C",
          "text": "Việc nắm giữ số cổ phiếu khống chế để điều hành các công ty mẹ và công ty con"
        },
        {
          "id": "D",
          "text": "Việc cho vay lãi suất thấp đối với các doanh nghiệp nhỏ"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l3_q21",
      "type": "multiple-choice",
      "text": "Xuất khẩu tư bản là đặc điểm nhằm mục đích chính là:",
      "options": [
        {
          "id": "A",
          "text": "Hỗ trợ kinh tế cho các nước nghèo phát triển"
        },
        {
          "id": "B",
          "text": "Giảm bớt lượng tiền thừa trong nước"
        },
        {
          "id": "C",
          "text": "Chiếm đoạt giá trị thặng dư và các nguồn lợi nhuận ở nước nhập khẩu tư bản"
        },
        {
          "id": "D",
          "text": "Tăng cường mối quan hệ ngoại giao giữa các quốc gia"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l3_q22",
      "type": "multiple-choice",
      "text": "Độc quyền nhà nước trong chủ nghĩa tư bản hình thành nhằm:",
      "options": [
        {
          "id": "A",
          "text": "Giải quyết vấn đề thất nghiệp cho người lao động"
        },
        {
          "id": "B",
          "text": "Phục vụ lợi ích của các tổ chức độc quyền tư nhân và cứu nguy cho chủ nghĩa tư bản"
        },
        {
          "id": "C",
          "text": "Xóa bỏ hoàn toàn chế độ tư hữu về tư liệu sản xuất"
        },
        {
          "id": "D",
          "text": "Phân phối lại của cải công bằng cho mọi tầng lớp xã hội"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l3_q23",
      "type": "multiple-choice",
      "text": "Vai trò tích cực của chủ nghĩa tư bản đối với lịch sử nhân loại bao gồm:",
      "options": [
        {
          "id": "A",
          "text": "Xóa bỏ hoàn toàn sự phân hóa giàu nghèo"
        },
        {
          "id": "B",
          "text": "Ngăn chặn triệt để các cuộc chiến tranh thế giới"
        },
        {
          "id": "C",
          "text": "Giải phóng loài người khỏi \"đêm trường trung cổ\", phát triển lực lượng sản xuất và xã hội hóa sản xuất"
        },
        {
          "id": "D",
          "text": "Đưa nền kinh tế thế giới thoát khỏi mọi cuộc khủng hoảng"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l3_q24",
      "type": "multiple-choice",
      "text": "Đâu là một trong những hạn chế lớn của chủ nghĩa tư bản?",
      "options": [
        {
          "id": "A",
          "text": "Làm tăng năng suất lao động xã hội quá nhanh"
        },
        {
          "id": "B",
          "text": "Mục đích nền sản xuất tập trung chủ yếu vì lợi ích của thiểu số giai cấp tư sản"
        },
        {
          "id": "C",
          "text": "Tạo ra quá nhiều sản phẩm cho người tiêu dùng"
        },
        {
          "id": "D",
          "text": "Thúc đẩy giao lưu kinh tế giữa các quốc gia"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l3_q25",
      "type": "multiple-choice",
      "text": "Các tổ chức độc quyền thường thiết lập giá cả độc quyền để:",
      "options": [
        {
          "id": "A",
          "text": "Đảm bảo quyền lợi tối đa cho người tiêu dùng"
        },
        {
          "id": "B",
          "text": "Giúp các doanh nghiệp nhỏ cùng phát triển"
        },
        {
          "id": "C",
          "text": "Thu được lợi nhuận độc quyền cao"
        },
        {
          "id": "D",
          "text": "Giảm bớt sự cạnh tranh trên thị trường toàn cầu"
        }
      ],
      "correctAnswer": "C"
    }
  ],
  "4": [
    {
      "id": "l4_q1",
      "type": "multiple-choice",
      "text": "Nguyên nhân chính dẫn đến sự hình thành các tổ chức độc quyền là:",
      "options": [
        {
          "id": "A",
          "text": "Tích tụ và tập trung sản xuất do cạnh tranh và tác động của khoa học kỹ thuật"
        },
        {
          "id": "B",
          "text": "Sự suy thoái của hệ thống ngân hàng tư nhân"
        },
        {
          "id": "C",
          "text": "Do năng suất lao động xã hội bị sụt giảm"
        },
        {
          "id": "D",
          "text": "Sự phát triển mạnh mẽ của các doanh nghiệp nhỏ lẻ"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l4_q2",
      "type": "multiple-choice",
      "text": "Trong giai đoạn độc quyền, quy luật cạnh tranh có đặc điểm gì?",
      "options": [
        {
          "id": "A",
          "text": "Độc quyền triệt tiêu hoàn toàn cạnh tranh tự do"
        },
        {
          "id": "B",
          "text": "Cạnh tranh chỉ diễn ra giữa các doanh nghiệp nhỏ với nhau"
        },
        {
          "id": "C",
          "text": "Độc quyền không thủ tiêu cạnh tranh, nó làm cạnh tranh trở nên gay gắt và phức tạp hơn"
        },
        {
          "id": "D",
          "text": "Cạnh tranh được thay thế hoàn toàn bằng sự hợp tác giữa các tập đoàn"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l4_q3",
      "type": "multiple-choice",
      "text": "Động lực chính của cạnh tranh trong giai đoạn độc quyền là gì?",
      "options": [
        {
          "id": "A",
          "text": "Giảm giá trị thặng dư của doanh nghiệp"
        },
        {
          "id": "B",
          "text": "Thu được lợi nhuận độc quyền cao và tăng giá trị thặng dư"
        },
        {
          "id": "C",
          "text": "Tăng chi phí tiêu dùng cho người dân"
        },
        {
          "id": "D",
          "text": "Giảm quy mô sản xuất để tránh rủi ro"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l4_q4",
      "type": "multiple-choice",
      "text": "Cạnh tranh nội bộ trong các tổ chức độc quyền xảy ra giữa những ai?",
      "options": [
        {
          "id": "A",
          "text": "Giữa độc quyền và các doanh nghiệp ngoài độc quyền"
        },
        {
          "id": "B",
          "text": "Giữa các tổ chức độc quyền thuộc các ngành khác nhau"
        },
        {
          "id": "C",
          "text": "Giữa các thành viên trong cùng một tổ chức độc quyền để giành lợi thế"
        },
        {
          "id": "D",
          "text": "Giữa người sản xuất và người tiêu dùng"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l4_q5",
      "type": "multiple-choice",
      "text": "Hình thức liên minh độc quyền nào mà các thành viên ký kết hiệp nghị về giá cả, quy mô nhưng vẫn độc lập về sản xuất và lưu thông?",
      "options": [
        {
          "id": "A",
          "text": "Cartel"
        },
        {
          "id": "B",
          "text": "Syndicate"
        },
        {
          "id": "C",
          "text": "Trust"
        },
        {
          "id": "D",
          "text": "Consortium"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l4_q6",
      "type": "multiple-choice",
      "text": "Đặc điểm của hình thức độc quyền \"Syndicate\" là gì?",
      "options": [
        {
          "id": "A",
          "text": "Các thành viên mất hoàn toàn tính độc lập về sản xuất"
        },
        {
          "id": "B",
          "text": "Việc mua nguyên liệu và bán hàng hóa do một ban quản trị chung đảm nhận"
        },
        {
          "id": "C",
          "text": "Các thành viên không cần thỏa thuận về giá cả hàng hóa"
        },
        {
          "id": "D",
          "text": "Chỉ tập trung vào lĩnh vực liên minh ngân hàng"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l4_q7",
      "type": "multiple-choice",
      "text": "Hình thức độc quyền nào mà các nhà tư bản tham gia trở thành những cổ đông, mất cả độc lập về sản xuất và lưu thông?",
      "options": [
        {
          "id": "A",
          "text": "Cartel"
        },
        {
          "id": "B",
          "text": "Syndicate"
        },
        {
          "id": "C",
          "text": "Trust"
        },
        {
          "id": "D",
          "text": "Consortium"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l4_q8",
      "type": "multiple-choice",
      "text": "Tư bản tài chính là kết quả của quá trình nào sau đây?",
      "options": [
        {
          "id": "A",
          "text": "Sự hợp nhất của các ngân hàng thương mại nhỏ"
        },
        {
          "id": "B",
          "text": "Sự tách rời giữa sản xuất công nghiệp và hoạt động tài chính"
        },
        {
          "id": "C",
          "text": "Sự dung hợp giữa độc quyền công nghiệp và độc quyền ngân hàng"
        },
        {
          "id": "D",
          "text": "Sự quản lý vốn tập trung hoàn toàn của nhà nước"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l4_q9",
      "type": "multiple-choice",
      "text": "\"Chế độ tham dự\" của các đầu sỏ tài chính được thực hiện thông qua:",
      "options": [
        {
          "id": "A",
          "text": "Việc tham gia trực tiếp vào các cuộc bầu cử chính trị"
        },
        {
          "id": "B",
          "text": "Việc nắm giữ số cổ phiếu khống chế để điều hành hệ thống công ty mẹ, con"
        },
        {
          "id": "C",
          "text": "Việc công nhân được chia lợi nhuận cùng nhà tư bản"
        },
        {
          "id": "D",
          "text": "Việc nhà nước nắm giữ toàn bộ cổ phần ngân hàng"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l4_q10",
      "type": "multiple-choice",
      "text": "Xuất khẩu tư bản là đặc điểm nhằm mục đích chính là:",
      "options": [
        {
          "id": "A",
          "text": "Hỗ trợ kinh tế cho các nước nghèo phát triển"
        },
        {
          "id": "B",
          "text": "Giảm bớt lượng tiền thừa trong nước"
        },
        {
          "id": "C",
          "text": "Chiếm đoạt giá trị thặng dư và lợi nhuận ở nước nhập khẩu tư bản"
        },
        {
          "id": "D",
          "text": "Tăng cường mối quan hệ ngoại giao giữa các quốc gia"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l4_q11",
      "type": "multiple-choice",
      "text": "Độc quyền nhà nước trong chủ nghĩa tư bản hình thành nhằm:",
      "options": [
        {
          "id": "A",
          "text": "Giải quyết vấn đề thất nghiệp cho người lao động"
        },
        {
          "id": "B",
          "text": "Phục vụ lợi ích của tổ chức độc quyền tư nhân và cứu nguy cho CNTB"
        },
        {
          "id": "C",
          "text": "Xóa bỏ hoàn toàn chế độ tư hữu về tư liệu sản xuất"
        },
        {
          "id": "D",
          "text": "Phân phối lại của cải công bằng cho mọi tầng lớp"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l4_q12",
      "type": "multiple-choice",
      "text": "Các tổ chức độc quyền thường thiết lập giá cả độc quyền để:",
      "options": [
        {
          "id": "A",
          "text": "Đảm bảo quyền lợi tối đa cho người tiêu dùng"
        },
        {
          "id": "B",
          "text": "Giúp các doanh nghiệp nhỏ cùng phát triển"
        },
        {
          "id": "C",
          "text": "Thu được lợi nhuận độc quyền cao"
        },
        {
          "id": "D",
          "text": "Giảm bớt sự cạnh tranh trên thị trường toàn cầu"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l4_q13",
      "type": "multiple-choice",
      "text": "Vai trò tích cực của chủ nghĩa tư bản đối với lịch sử nhân loại là:",
      "options": [
        {
          "id": "A",
          "text": "Xóa bỏ hoàn toàn sự phân hóa giàu nghèo"
        },
        {
          "id": "B",
          "text": "Phát triển lực lượng sản xuất, xã hội hóa sản xuất và giải phóng loài người khỏi phong kiến"
        },
        {
          "id": "C",
          "text": "Ngăn chặn triệt để các cuộc khủng hoảng kinh tế"
        },
        {
          "id": "D",
          "text": "Đảm bảo quyền làm chủ tuyệt đối cho giai cấp công nhân"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l4_q14",
      "type": "multiple-select",
      "text": "Chọn các phương án đúng. Những hạn chế của chủ nghĩa tư bản bao gồm:",
      "options": [
        {
          "id": "A",
          "text": "Mục đích sản xuất tập trung vì lợi ích của thiểu số giai cấp tư sản"
        },
        {
          "id": "B",
          "text": "Gây ra các cuộc chiến tranh và xung đột quốc tế tranh giành thị trường"
        },
        {
          "id": "C",
          "text": "Làm sâu sắc thêm sự phân hóa giàu nghèo và bất bình đẳng xã hội"
        },
        {
          "id": "D",
          "text": "Thúc đẩy tiến bộ khoa học kỹ thuật cho toàn dân"
        }
      ],
      "correctAnswers": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "l4_q15",
      "type": "multiple-choice",
      "text": "Kinh tế tri thức được coi là thành tựu của chủ nghĩa tư bản ở khía cạnh nào?",
      "options": [
        {
          "id": "A",
          "text": "Làm giảm sự phụ thuộc của con người vào máy móc"
        },
        {
          "id": "B",
          "text": "Phát triển lực lượng sản xuất dựa trên nền tảng khoa học công nghệ hiện đại"
        },
        {
          "id": "C",
          "text": "Loại bỏ hoàn toàn sự cạnh tranh khốc liệt"
        },
        {
          "id": "D",
          "text": "Tăng sự bóc lột lao động cơ bắp"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l4_q16",
      "type": "multiple-choice",
      "text": "Nhận định nào sau đây là ĐÚNG khi nói về độc quyền?",
      "options": [
        {
          "id": "A",
          "text": "Độc quyền sinh ra từ cạnh tranh tự do nhưng không thủ tiêu cạnh tranh"
        },
        {
          "id": "B",
          "text": "Độc quyền xóa bỏ hoàn toàn các doanh nghiệp nhỏ và vừa"
        },
        {
          "id": "C",
          "text": "Độc quyền chỉ tồn tại trong các nước nghèo"
        },
        {
          "id": "D",
          "text": "Độc quyền giúp giá cả hàng hóa luôn ổn định ở mức thấp nhất"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l4_q17",
      "type": "multiple-choice",
      "text": "Xuất khẩu tư bản dưới hình thức \"đầu tư trực tiếp\" (FDI) là:",
      "options": [
        {
          "id": "A",
          "text": "Xây dựng xí nghiệp, nhà máy ở nước ngoài để khai thác giá trị thặng dư"
        },
        {
          "id": "B",
          "text": "Cho các chính phủ nước ngoài vay tiền lấy lãi"
        },
        {
          "id": "C",
          "text": "Mua trái phiếu của các tổ chức quốc tế"
        },
        {
          "id": "D",
          "text": "Cung cấp viện trợ không hoàn lại cho các nước phát triển"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l4_q18",
      "type": "true-false-group",
      "context": "Xác định Đúng/Sai cho các phát biểu dưới đây:",
      "subQuestions": [
        {
          "id": "q4_18_1",
          "text": "1. Xuất khẩu tư bản là đặc điểm nổi bật của giai đoạn CNTB tự do cạnh tranh.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        },
        {
          "id": "q4_18_2",
          "text": "2. Tư bản tài chính thống trị cả về kinh tế và chính trị.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q4_18_3",
          "text": "3. Cartel là hình thức liên minh độc quyền cao hơn Trust.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        },
        {
          "id": "q4_18_4",
          "text": "4. Kinh tế tri thức là một trong những thành tựu của CNTB hiện đại.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q4_18_5",
          "text": "5. Xã hội hóa lao động làm tăng sự hợp tác sản xuất giữa các ngành.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "B"
        },
        {
          "id": "q4_18_6",
          "text": "6. Chiến tranh thế giới không có mối liên hệ với cạnh tranh độc quyền.",
          "options": [
            {
              "id": "A",
              "text": "Sai"
            },
            {
              "id": "B",
              "text": "Đúng"
            }
          ],
          "correctAnswer": "A"
        }
      ]
    }
  ],
  "5": [
    {
      "id": "l5_q1",
      "type": "multiple-choice",
      "text": "Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam vận hành theo:",
      "options": [
        {
          "id": "A",
          "text": "Kế hoạch tập trung quan liêu bao cấp"
        },
        {
          "id": "B",
          "text": "Các quy luật kinh tế thị trường đồng thời đảm bảo định hướng xã hội chủ nghĩa"
        },
        {
          "id": "C",
          "text": "Thị trường chủ nghĩa tự do hoàn toàn"
        },
        {
          "id": "D",
          "text": "Cơ chế kinh tế tự cấp tự túc"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l5_q2",
      "type": "multiple-choice",
      "text": "Khái niệm \"Kinh tế thị trường định hướng xã hội chủ nghĩa\" ở Việt Nam được hiểu là:",
      "options": [
        {
          "id": "A",
          "text": "Một hình thức kế hoạch hóa tập trung kiểu mới"
        },
        {
          "id": "B",
          "text": "Một nền kinh tế phi thị trường nhưng có định hướng cộng sản"
        },
        {
          "id": "C",
          "text": "Một nền kinh tế vận hành đầy đủ theo cơ chế thị trường hoạt động dưới sự lãnh đạo của Đảng, vì mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh"
        },
        {
          "id": "D",
          "text": "Một nền kinh tế thị trường tư bản chủ nghĩa có can thiệp của Nhà nước"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l5_q3",
      "type": "multiple-choice",
      "text": "Tính tất yếu của việc phát triển kinh tế thị trường định hướng XHCN ở Việt Nam được thể hiện ở:",
      "options": [
        {
          "id": "A",
          "text": "Quy luật vận động của nền kinh tế hàng hóa đạt tới giai đoạn kinh tế thị trường"
        },
        {
          "id": "B",
          "text": "Nhu cầu hợp tác khu vực"
        },
        {
          "id": "C",
          "text": "Yêu cầu của xu thế tự do hóa toàn cầu"
        },
        {
          "id": "D",
          "text": "Mục tiêu là lợi nhuận của doanh nghiệp"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l5_q4",
      "type": "multiple-choice",
      "text": "Đặc trưng nào thể hiện sự khác biệt giữa kinh tế thị trường định hướng XHCN và kinh tế thị trường tư bản:",
      "options": [
        {
          "id": "A",
          "text": "Tôn trọng quy luật cung cầu"
        },
        {
          "id": "B",
          "text": "Thừa nhận vai trò của kinh tế tư nhân"
        },
        {
          "id": "C",
          "text": "Vận hành hoàn toàn theo quy luật thị trường"
        },
        {
          "id": "D",
          "text": "Mục tiêu hướng đến xã hội \"dân giàu, nước mạnh, dân chủ, công bằng, văn minh\""
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l5_q5",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Những yếu tố nào là điều kiện để kinh tế thị trường định hướng XHCN phát triển đúng hướng:",
      "options": [
        {
          "id": "A",
          "text": "Kết hợp hài hòa giữa tăng trưởng kinh tế và công bằng xã hội"
        },
        {
          "id": "B",
          "text": "Thị trường hoàn toàn tự do, không kiểm soát"
        },
        {
          "id": "C",
          "text": "Vai trò lãnh đạo của Đảng Cộng sản Việt Nam"
        },
        {
          "id": "D",
          "text": "Bỏ qua vai trò của doanh nghiệp nhà nước"
        }
      ],
      "correctAnswers": [
        "A",
        "C"
      ]
    },
    {
      "id": "l5_q6",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Vai trò của Nhà nước trong nền kinh tế thị trường định hướng XHCN bao gồm:",
      "options": [
        {
          "id": "A",
          "text": "Từ bỏ vai trò quản lý vì thị trường tự điều tiết"
        },
        {
          "id": "B",
          "text": "Kiểm soát, điều tiết các mặt hàng chiến lược, thiết yếu"
        },
        {
          "id": "C",
          "text": "Xây dựng thể chế và hành lang pháp lý cho thị trường hoạt động ổn định"
        },
        {
          "id": "D",
          "text": "Trở thành đối trọng với khu vực tư nhân"
        }
      ],
      "correctAnswers": [
        "B",
        "C"
      ]
    },
    {
      "id": "l5_q7",
      "type": "multiple-choice",
      "text": "Thể chế kinh tế là gì?",
      "options": [
        {
          "id": "A",
          "text": "Kế hoạch điều tiết vĩ mô của Nhà nước"
        },
        {
          "id": "B",
          "text": "Hệ thống các quy tắc, luật pháp và cơ chế vận hành điều chỉnh hành vi các chủ thể kinh tế"
        },
        {
          "id": "C",
          "text": "Bộ luật dân sự và hình sự trong kinh tế"
        },
        {
          "id": "D",
          "text": "Hệ thống công cụ điều tiết thu nhập xã hội"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l5_q8",
      "type": "multiple-choice",
      "text": "Một trong những yếu tố cấu thành thể chế kinh tế thị trường là:",
      "options": [
        {
          "id": "A",
          "text": "Các thiết chế xã hội truyền thống"
        },
        {
          "id": "B",
          "text": "Các hiệp định thương mại song phương"
        },
        {
          "id": "C",
          "text": "Các sáng kiến tự phát từ doanh nghiệp"
        },
        {
          "id": "D",
          "text": "Các quy tắc, luật pháp chính thức và không chính thức"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l5_q9",
      "type": "multiple-choice",
      "text": "Chủ thể tham gia thể chế kinh tế thị trường gồm:",
      "options": [
        {
          "id": "A",
          "text": "Cá nhân có vốn lớn"
        },
        {
          "id": "B",
          "text": "Chỉ gồm cơ quan điều tiết thị trường"
        },
        {
          "id": "C",
          "text": "Chỉ có các doanh nghiệp nhà nước"
        },
        {
          "id": "D",
          "text": "Doanh nghiệp, tổ chức xã hội và cơ quan quản lý kinh tế"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l5_q10",
      "type": "multiple-choice",
      "text": "Vì sao cần hoàn thiện thể chế về các yếu tố thị trường?",
      "options": [
        {
          "id": "A",
          "text": "Để loại bỏ kinh tế tư nhân"
        },
        {
          "id": "B",
          "text": "Để đảm bảo vận hành thông suốt các loại thị trường, phát huy tác động cộng hưởng"
        },
        {
          "id": "C",
          "text": "Để thực hiện bao cấp"
        },
        {
          "id": "D",
          "text": "Để hạn chế vai trò của thị trường"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l5_q11",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Những nội dung nào thuộc hoàn thiện thể chế về sở hữu:",
      "options": [
        {
          "id": "A",
          "text": "Xóa bỏ sở hữu tư nhân"
        },
        {
          "id": "B",
          "text": "Thể chế hóa đầy đủ quyền tài sản"
        },
        {
          "id": "C",
          "text": "Tăng bảo hộ doanh nghiệp nhà nước"
        },
        {
          "id": "D",
          "text": "Hoàn thiện pháp luật về đất đai, tài nguyên"
        }
      ],
      "correctAnswers": [
        "B",
        "D"
      ]
    },
    {
      "id": "l5_q12",
      "type": "multiple-choice",
      "text": "Lợi ích kinh tế là:",
      "options": [
        {
          "id": "A",
          "text": "Sự thỏa mãn nhu cầu vật chất thu được qua hoạt động kinh tế"
        },
        {
          "id": "B",
          "text": "Sự chia đều thu nhập giữa các cá nhân"
        },
        {
          "id": "C",
          "text": "Sự ưu đãi tài chính của Nhà nước"
        },
        {
          "id": "D",
          "text": "Sự phát triển các giá trị tinh thần"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l5_q13",
      "type": "multiple-choice",
      "text": "Vì sao cần điều tiết quan hệ lợi ích kinh tế?",
      "options": [
        {
          "id": "A",
          "text": "Vì thị trường không có vai trò điều phối"
        },
        {
          "id": "B",
          "text": "Vì nhà nước cần can thiệp vào mọi giao dịch"
        },
        {
          "id": "C",
          "text": "Vì mọi chủ thể đều bình đẳng như nhau"
        },
        {
          "id": "D",
          "text": "Vì tồn tại sự mâu thuẫn và xung đột trong lợi ích"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l5_q14",
      "type": "multiple-choice",
      "text": "Mâu thuẫn trong quan hệ lợi ích có thể dẫn đến:",
      "options": [
        {
          "id": "A",
          "text": "Sự biến mất của tư hữu"
        },
        {
          "id": "B",
          "text": "Hài hòa lợi ích tự nhiên"
        },
        {
          "id": "C",
          "text": "Tăng trưởng nhanh chóng"
        },
        {
          "id": "D",
          "text": "Xung đột xã hội và bất ổn"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l5_q15",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Vai trò của lợi ích kinh tế đối với xã hội là:",
      "options": [
        {
          "id": "A",
          "text": "Là yếu tố duy nhất của tiến bộ xã hội"
        },
        {
          "id": "B",
          "text": "Là nguyên nhân dẫn đến bất ổn trong mọi trường hợp"
        },
        {
          "id": "C",
          "text": "Là động lực thúc đẩy sản xuất"
        },
        {
          "id": "D",
          "text": "Là cơ sở ổn định và phát triển xã hội"
        }
      ],
      "correctAnswers": [
        "C",
        "D"
      ]
    }
  ],
  "6": [
    {
      "id": "l6_q1",
      "type": "multiple-choice",
      "text": "Theo Hội nghị Trung ương 7 khóa VII (1994), công nghiệp hóa, hiện đại hóa ở Việt Nam dựa trên nền tảng nào?",
      "options": [
        {
          "id": "A",
          "text": "Kinh tế thị trường tự phát"
        },
        {
          "id": "B",
          "text": "Tái cơ cấu dân cư"
        },
        {
          "id": "C",
          "text": "Phát triển công nghiệp và tiến bộ khoa học – công nghệ"
        },
        {
          "id": "D",
          "text": "Quản lý hành chính hiện đại"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "l6_q2",
      "type": "multiple-choice",
      "text": "Công nghiệp hóa là quá trình chuyển đổi nền sản xuất xã hội từ lao động thủ công là chính sang:",
      "options": [
        {
          "id": "A",
          "text": "Lao động có trình độ học vấn cao"
        },
        {
          "id": "B",
          "text": "Lao động bằng máy móc"
        },
        {
          "id": "C",
          "text": "Lao động trí tuệ cao"
        },
        {
          "id": "D",
          "text": "Lao động theo mô hình khép kín"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l6_q3",
      "type": "multiple-select",
      "text": "Chọn 3 phương án trả lời đúng. Công nghiệp hóa, hiện đại hóa có những vai trò nào?",
      "options": [
        {
          "id": "A",
          "text": "Hoàn thiện quan hệ sản xuất xã hội chủ nghĩa"
        },
        {
          "id": "B",
          "text": "Tạo động lực phát triển kinh tế mạnh mẽ"
        },
        {
          "id": "C",
          "text": "Góp phần làm giảm vai trò của nông nghiệp"
        },
        {
          "id": "D",
          "text": "Là điều kiện xây dựng cơ sở vật chất – kỹ thuật cho chủ nghĩa xã hội"
        }
      ],
      "correctAnswers": [
        "A",
        "B",
        "D"
      ]
    },
    {
      "id": "l6_q4",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Những đặc điểm chính của mô hình công nghiệp hóa cổ điển ở Tây Âu và Mỹ bao gồm:",
      "options": [
        {
          "id": "A",
          "text": "Ưu tiên công nghiệp nặng"
        },
        {
          "id": "B",
          "text": "Dựa vào chuyên môn hóa, hiệu suất"
        },
        {
          "id": "C",
          "text": "Tuần tự từ thấp đến cao"
        },
        {
          "id": "D",
          "text": "Thực hiện nhanh chóng nhờ FDI"
        }
      ],
      "correctAnswers": [
        "B",
        "C"
      ]
    },
    {
      "id": "l6_q5",
      "type": "multiple-choice",
      "text": "Lực lượng được coi là \"quốc sách hàng đầu\" trong việc thực hiện công nghiệp hóa là:",
      "options": [
        {
          "id": "A",
          "text": "Thị trường nội địa"
        },
        {
          "id": "B",
          "text": "Nguồn nhân lực"
        },
        {
          "id": "C",
          "text": "Tài nguyên thiên nhiên"
        },
        {
          "id": "D",
          "text": "Cơ sở hạ tầng kỹ thuật"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l6_q6",
      "type": "multiple-choice",
      "text": "Lực lượng giữ vai trò đặc biệt quan trọng trong việc sử dụng các phương tiện kỹ thuật công nghiệp hóa là:",
      "options": [
        {
          "id": "A",
          "text": "Doanh nhân trẻ"
        },
        {
          "id": "B",
          "text": "Nhà đầu tư nước ngoài"
        },
        {
          "id": "C",
          "text": "Tổ chức phi chính phủ"
        },
        {
          "id": "D",
          "text": "Công nhân lành nghề và cán bộ khoa học công nghệ"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l6_q7",
      "type": "multiple-choice",
      "text": "Vì sao khoa học công nghệ được xem là động lực của công nghiệp hóa?",
      "options": [
        {
          "id": "A",
          "text": "Vì đó là mục tiêu của giáo dục"
        },
        {
          "id": "B",
          "text": "Vì khoa học công nghệ nâng cao năng lực cạnh tranh và tốc độ phát triển kinh tế"
        },
        {
          "id": "C",
          "text": "Vì đó là xu thế quốc tế"
        },
        {
          "id": "D",
          "text": "Vì khoa học công nghệ giúp giảm phụ thuộc vào đầu tư nước ngoài"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l6_q8",
      "type": "multiple-choice",
      "text": "Một ngành được coi là ngành kinh tế tri thức khi:",
      "options": [
        {
          "id": "A",
          "text": "Có nhiều sản phẩm ứng dụng điện tử"
        },
        {
          "id": "B",
          "text": "Giá trị do tri thức tạo ra chiếm khoảng 70% tổng giá trị sản xuất"
        },
        {
          "id": "C",
          "text": "Có tốc độ tăng trưởng cao hơn bình quân cả nước"
        },
        {
          "id": "D",
          "text": "Có nhiều lao động chất lượng cao"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l6_q9",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Những rủi ro mà các nước đang phát triển như Việt Nam có thể đối mặt khi hội nhập kinh tế quốc tế:",
      "options": [
        {
          "id": "A",
          "text": "Tăng sức mạnh tự chủ tuyệt đối trong nền kinh tế"
        },
        {
          "id": "B",
          "text": "Nguy cơ bị tổn thương trước biến động thị trường toàn cầu"
        },
        {
          "id": "C",
          "text": "Gia tăng cơ hội tiếp cận khoa học – công nghệ"
        },
        {
          "id": "D",
          "text": "Nguy cơ văn hóa truyền thống bị xâm lăng"
        }
      ],
      "correctAnswers": [
        "B",
        "D"
      ]
    },
    {
      "id": "l6_q10",
      "type": "multiple-choice",
      "text": "Hội nhập kinh tế quốc tế là quá trình:",
      "options": [
        {
          "id": "A",
          "text": "Quốc gia mở rộng thị trường trong nước"
        },
        {
          "id": "B",
          "text": "Quốc gia gắn kết kinh tế với thế giới trên cơ sở chia sẻ lợi ích và tuân thủ chuẩn mực quốc tế"
        },
        {
          "id": "C",
          "text": "Quốc gia tự chủ trong mọi chính sách kinh tế"
        },
        {
          "id": "D",
          "text": "Quốc gia rút khỏi các cam kết quốc tế"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "l6_q11",
      "type": "multiple-choice",
      "text": "Vì sao hội nhập kinh tế quốc tế là tất yếu khách quan đối với các nước đang phát triển như Việt Nam?",
      "options": [
        {
          "id": "A",
          "text": "Để tiếp cận nguồn lực bên ngoài, rút ngắn khoảng cách phát triển"
        },
        {
          "id": "B",
          "text": "Để có thể cạnh tranh với các siêu cường kinh tế"
        },
        {
          "id": "C",
          "text": "Để giảm thiểu vai trò quản lý của Nhà nước"
        },
        {
          "id": "D",
          "text": "Để thay thế thương mại nội địa bằng ngoại thương"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l6_q12",
      "type": "multiple-select",
      "text": "Chọn 2 phương án trả lời đúng. Những lợi ích chính của hội nhập kinh tế quốc tế đối với Việt Nam gồm:",
      "options": [
        {
          "id": "A",
          "text": "Nâng cao chất lượng nguồn nhân lực qua hợp tác quốc tế"
        },
        {
          "id": "B",
          "text": "Tăng khả năng tiếp cận thị trường quốc tế"
        },
        {
          "id": "C",
          "text": "Giảm sự cạnh tranh và bảo hộ sản xuất trong nước"
        },
        {
          "id": "D",
          "text": "Mở rộng liên kết vùng trong nước"
        }
      ],
      "correctAnswers": [
        "A",
        "B"
      ]
    },
    {
      "id": "l6_q13",
      "type": "multiple-choice",
      "text": "Hội nhập kinh tế quốc tế giúp Việt Nam cải thiện môi trường đầu tư thông qua:",
      "options": [
        {
          "id": "A",
          "text": "Hạn chế hợp tác khoa học"
        },
        {
          "id": "B",
          "text": "Giảm số lượng đối tác quốc tế"
        },
        {
          "id": "C",
          "text": "Tăng thuế và kiểm soát nhập khẩu"
        },
        {
          "id": "D",
          "text": "Tăng cường tiếp nhận công nghệ hiện đại và vốn từ nước ngoài"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l6_q14",
      "type": "multiple-choice",
      "text": "Một doanh nghiệp Việt Nam muốn mở rộng thị trường trong bối cảnh hội nhập quốc tế. Họ cần ưu tiên hành động nào?",
      "options": [
        {
          "id": "A",
          "text": "Đẩy mạnh truyền thông nội địa"
        },
        {
          "id": "B",
          "text": "Giảm chất lượng sản phẩm để hạ giá"
        },
        {
          "id": "C",
          "text": "Chỉ bán hàng thông qua trung gian trong nước"
        },
        {
          "id": "D",
          "text": "Tuân thủ tiêu chuẩn quốc tế và cải tiến công nghệ sản xuất"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "l6_q15",
      "type": "multiple-choice",
      "text": "Để hạn chế nguy cơ mất bản sắc văn hóa trong hội nhập, Việt Nam cần:",
      "options": [
        {
          "id": "A",
          "text": "Bảo tồn văn hóa dân tộc đồng thời chọn lọc tinh hoa văn hóa nhân loại"
        },
        {
          "id": "B",
          "text": "Tập trung hội nhập chính trị thay vì văn hóa"
        },
        {
          "id": "C",
          "text": "Tăng cường thương mại hóa văn hóa truyền thống"
        },
        {
          "id": "D",
          "text": "Ngăn chặn mọi hình thức văn hóa nước ngoài"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l6_q16",
      "type": "multiple-choice",
      "text": "Trong bối cảnh hội nhập kinh tế quốc tế, để nâng cao khả năng cạnh tranh, Việt Nam cần ưu tiên giải pháp nào?",
      "options": [
        {
          "id": "A",
          "text": "Phát triển doanh nghiệp đổi mới công nghệ, nâng cao chất lượng nguồn nhân lực"
        },
        {
          "id": "B",
          "text": "Tăng cường bảo hộ sản xuất nội địa"
        },
        {
          "id": "C",
          "text": "Tăng xuất khẩu tài nguyên thô"
        },
        {
          "id": "D",
          "text": "Giảm đầu tư vào nghiên cứu và phát triển"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l6_q17",
      "type": "multiple-choice",
      "text": "Trong nền kinh tế tri thức, yếu tố nào trở thành tài nguyên quan trọng nhất?",
      "options": [
        {
          "id": "A",
          "text": "Thông tin"
        },
        {
          "id": "B",
          "text": "Tài chính"
        },
        {
          "id": "C",
          "text": "Tài nguyên khoáng sản"
        },
        {
          "id": "D",
          "text": "Địa lý"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "l6_q18",
      "type": "multiple-select",
      "text": "Chọn 3 phương án trả lời đúng. Những đặc điểm cơ bản của kinh tế tri thức bao gồm:",
      "options": [
        {
          "id": "A",
          "text": "Tri thức là lực lượng sản xuất trực tiếp"
        },
        {
          "id": "B",
          "text": "Công nghệ thông tin được ứng dụng rộng rãi"
        },
        {
          "id": "C",
          "text": "Tài nguyên thiên nhiên là yếu tố quyết định nhất"
        },
        {
          "id": "D",
          "text": "Nguồn nhân lực nhanh chóng được tri thức hóa"
        }
      ],
      "correctAnswers": [
        "A",
        "B",
        "D"
      ]
    },
    {
      "id": "l6_q19",
      "type": "drag-drop-fill",
      "text": "Kéo đáp án đúng nhất vào ô trống.",
      "items": [
        "Dịch vụ công",
        "Máy móc",
        "Tài chính – ngân hàng",
        "Công nghệ số"
      ],
      "sentences": [
        {
          "id": "b1",
          "pre": "Công nghiệp hóa là quá trình chuyển đổi từ nền sản xuất xã hội dựa trên lao động thủ công là chính sang sản xuất dựa chủ yếu trên",
          "post": ""
        }
      ],
      "correct": {
        "b1": "Máy móc"
      }
    },
    {
      "id": "l6_q20",
      "type": "drag-drop-category",
      "text": "Kéo thả những đặc điểm cơ bản tương ứng với nền kinh tế tri thức và nền kinh tế truyền thống.",
      "items": [
        "Dựa chủ yếu vào lao động cơ bắp",
        "Tri thức là lực lượng sản xuất trực tiếp",
        "Nhân lực được tri thức hóa nhanh chóng",
        "Cơ cấu kinh tế khép kín, bảo thủ"
      ],
      "categories": [
        "Kinh tế tri thức",
        "Kinh tế truyền thống"
      ],
      "correct": {
        "cat1": [
          "Tri thức là lực lượng sản xuất trực tiếp",
          "Nhân lực được tri thức hóa nhanh chóng"
        ],
        "cat2": [
          "Dựa chủ yếu vào lao động cơ bắp",
          "Cơ cấu kinh tế khép kín, bảo thủ"
        ]
      }
    }
  ],
  "ktsl_1": [
    {
      "id": "ktsl1_q1",
      "type": "multiple-choice",
      "text": "Các thiết bị thông tin phải là một phần của hệ thống thông tin được cấu thành từ?",
      "options": [
        {
          "id": "A",
          "text": "Phần mềm và mạng máy tính"
        },
        {
          "id": "B",
          "text": "Phần cứng và mạng máy tính"
        },
        {
          "id": "C",
          "text": "Phần cứng và phần mềm"
        },
        {
          "id": "D",
          "text": "Dữ liệu và môi trường truyền"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "ktsl1_q2",
      "type": "multiple-choice",
      "text": "Tầm tác động của hệ thống truyền thông dữ liệu phụ thuộc vào các đặc tính cơ bản nào?",
      "options": [
        {
          "id": "A",
          "text": "Cả 03 đáp án trên đều đúng"
        },
        {
          "id": "B",
          "text": "Đúng lúc"
        },
        {
          "id": "C",
          "text": "Chính xác"
        },
        {
          "id": "D",
          "text": "Sự phát xạ"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl1_q3",
      "type": "multiple-choice",
      "text": "Một hệ thống thông tin dữ liệu được cấu tạo từ bao nhiêu thành phần?",
      "options": [
        {
          "id": "A",
          "text": "6"
        },
        {
          "id": "B",
          "text": "5"
        },
        {
          "id": "C",
          "text": "4"
        },
        {
          "id": "D",
          "text": "3"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl1_q3_1",
      "type": "multiple-choice",
      "text": "Nghi thức trong hệ thống thông tin dữ liệu là?",
      "options": [
        {
          "id": "A",
          "text": "Môi trường điều hành thông tin dữ liệu"
        },
        {
          "id": "B",
          "text": "Thiết bị nhận điều hành thông tin dữ liệu"
        },
        {
          "id": "C",
          "text": "Tập quy luật dùng điều hành thông tin dữ liệu"
        },
        {
          "id": "D",
          "text": "Thiết bị gửi điều hành thông tin dữ liệu"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "ktsl1_q3_2",
      "type": "multiple-choice",
      "text": "Hình vẽ sau đây mô tả:",
      "image": "/images/ktsl/ktsl_b1_img7.png",
      "options": [
        {
          "id": "A",
          "text": "Các thành phần của môi trường truyền dẫn"
        },
        {
          "id": "B",
          "text": "Các thành phần của hệ thống thông tin dữ liệu"
        },
        {
          "id": "C",
          "text": "Thông điệp khi truyền dữ liệu từ bộ gởi đến bộ nhận"
        },
        {
          "id": "D",
          "text": "Nghi thức lớp liên kết dữ liệu"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl1_q4",
      "type": "multiple-choice",
      "text": "IEEE có nhiều tiểu ban (Committee). Trong đó Tiểu ban 802 phụ trách về các chuẩn cho?",
      "options": [
        {
          "id": "A",
          "text": "Mạng xe cộ"
        },
        {
          "id": "B",
          "text": "Mạng diện rộng"
        },
        {
          "id": "C",
          "text": "Mạng cục bộ"
        },
        {
          "id": "D",
          "text": "Mạng di động"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "ktsl1_q4_1",
      "type": "multiple-choice",
      "text": "802.4 là chuẩn cho mạng nào?",
      "options": [
        {
          "id": "A",
          "text": "Vệ tinh"
        },
        {
          "id": "B",
          "text": "Internet"
        },
        {
          "id": "C",
          "text": "Ethernet"
        },
        {
          "id": "D",
          "text": "Token Bus"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl1_q5",
      "type": "multiple-choice",
      "text": "802.3 là chuẩn cho mạng nào?",
      "options": [
        {
          "id": "A",
          "text": "Di động"
        },
        {
          "id": "B",
          "text": "Ethernet"
        },
        {
          "id": "C",
          "text": "Internet"
        },
        {
          "id": "D",
          "text": "Viba"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl1_q6",
      "type": "multiple-choice",
      "text": "802.5 là chuẩn cho mạng nào?",
      "options": [
        {
          "id": "A",
          "text": "Di động"
        },
        {
          "id": "B",
          "text": "Không dây"
        },
        {
          "id": "C",
          "text": "Token Ring"
        },
        {
          "id": "D",
          "text": "Hữu tuyến"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "ktsl1_q6_1",
      "type": "multiple-choice",
      "text": "802.11 là chuẩn cho mạng nào?",
      "options": [
        {
          "id": "A",
          "text": "Mạng di động"
        },
        {
          "id": "B",
          "text": "Mạng thông tin vệ tinh"
        },
        {
          "id": "C",
          "text": "Mạng hữu tuyến"
        },
        {
          "id": "D",
          "text": "Mạng không dây"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl1_q6_2",
      "type": "multiple-choice",
      "text": "Các chuẩn do IEEE 802 định nghĩa thực hiện chức năng của tầng thứ mấy trong mô hình tham khảo OSI?",
      "options": [
        {
          "id": "A",
          "text": "2"
        },
        {
          "id": "B",
          "text": "4"
        },
        {
          "id": "C",
          "text": "3"
        },
        {
          "id": "D",
          "text": "5"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl1_q7",
      "type": "multiple-select",
      "text": "IEEE 802.1 dành cho liên mạng của các mạng nào sau đây? (Chọn 2 đáp án)",
      "options": [
        {
          "id": "A",
          "text": "LANS"
        },
        {
          "id": "B",
          "text": "MANs"
        },
        {
          "id": "C",
          "text": "WANs"
        },
        {
          "id": "D",
          "text": "OBS"
        }
      ],
      "correctAnswers": [
        "A",
        "B"
      ]
    },
    {
      "id": "ktsl1_q8",
      "type": "multiple-choice",
      "text": "Hình vẽ sau mô tả vấn đề nào của PDU?",
      "image": "/images/ktsl/ktsl_b1_img5.png",
      "options": [
        {
          "id": "A",
          "text": "Nghi thức PDU"
        },
        {
          "id": "B",
          "text": "Môi trường PDU"
        },
        {
          "id": "C",
          "text": "Dạng thức PDU"
        },
        {
          "id": "D",
          "text": "Địa chỉ PDU"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "ktsl1_q9",
      "type": "multiple-choice",
      "text": "Hình vẽ sau mô tả?",
      "image": "/images/ktsl/ktsl_b1_img3.png",
      "options": [
        {
          "id": "A",
          "text": "Trường cờ trong một PDU"
        },
        {
          "id": "B",
          "text": "Trường kiểm soát trong một PDU"
        },
        {
          "id": "C",
          "text": "Trường tín hiệu trong một PDU"
        },
        {
          "id": "D",
          "text": "Trường điều khiển trong một PDU"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl1_q9_1",
      "type": "multiple-select",
      "text": "Tầng ứng dụng trong mô hình TCP/IP bao gồm các chi tiết của các tầng nào trong mô hình OSI? (Chọn 3 đáp án)",
      "options": [
        {
          "id": "A",
          "text": "Tầng ứng dụng"
        },
        {
          "id": "B",
          "text": "Tầng điều khiển"
        },
        {
          "id": "C",
          "text": "Tầng phiên"
        },
        {
          "id": "D",
          "text": "Tầng trình bày"
        }
      ],
      "correctAnswers": [
        "A",
        "C",
        "D"
      ]
    },
    {
      "id": "ktsl1_q9_2",
      "type": "multiple-choice",
      "text": "Mô hình OSI gồm có bao nhiêu tầng?",
      "image": "/images/ktsl/ktsl_b1_img1.png",
      "options": [
        {
          "id": "A",
          "text": "7"
        },
        {
          "id": "B",
          "text": "6"
        },
        {
          "id": "C",
          "text": "5"
        },
        {
          "id": "D",
          "text": "4"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl1_q10",
      "type": "multiple-choice",
      "text": "Trong mô hình OSI dưới đây tầng vận chuyển làm nhiệm vụ?",
      "image": "/images/ktsl/ktsl_b1_img9.png",
      "options": [
        {
          "id": "A",
          "text": "Cả 03 đáp án trên đều đúng"
        },
        {
          "id": "B",
          "text": "Thực hiện việc ghép kênh (multiplexing), cắt/hợp dữ liệu nếu cần"
        },
        {
          "id": "C",
          "text": "Thực hiện cả việc kiểm soát lỗi và kiểm soát luồng dữ liệu giữa 2 đầu nút"
        },
        {
          "id": "D",
          "text": "Thực hiện việc truyền dữ liệu giữa hai đầu mút (end - to end)"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl1_q10_1",
      "type": "multiple-choice",
      "text": "Trong mô hình OSI dưới đây tầng mạng làm nhiệm vụ?",
      "image": "/images/ktsl/ktsl_b1_img8.png",
      "options": [
        {
          "id": "A",
          "text": "Chuyển tiếp thông tin với công nghệ chuyển mạch thích hợp"
        },
        {
          "id": "B",
          "text": "Cả 03 đáp án trên đều đúng"
        },
        {
          "id": "C",
          "text": "Thực hiện kiểm soát luồng dữ liệu và cắt/hợp dữ liệu nếu cần"
        },
        {
          "id": "D",
          "text": "Thực hiện việc chọn đường"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl1_q11",
      "type": "multiple-choice",
      "text": "TCP/IP là bộ giao thức cho phép kết nối?",
      "options": [
        {
          "id": "A",
          "text": "Các hệ thống mạng đô thị với nhau"
        },
        {
          "id": "B",
          "text": "Các hệ thống mạng diện rộng với nhau"
        },
        {
          "id": "C",
          "text": "Các hệ thống mạng cá nhân với nhau"
        },
        {
          "id": "D",
          "text": "Các hệ thống mạng không đồng nhất với nhau"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl1_q11_1",
      "type": "multiple-choice",
      "text": "Trong mô hình OSI dưới đây tầng liên kết dữ liệu làm nhiệm vụ?",
      "image": "/images/ktsl/ktsl_b1_img8.png",
      "options": [
        {
          "id": "A",
          "text": "Kiểm soát lỗi và kiểm soát luồng dữ liệu cần thiết"
        },
        {
          "id": "B",
          "text": "Cung cấp phương tiện để truyền thông tin qua liên kết vật lý đảm bảo tin cậy"
        },
        {
          "id": "C",
          "text": "Cả 03 đáp án trên đều đúng"
        },
        {
          "id": "D",
          "text": "Gửi các khối dữ liệu (frame) với các cơ chế đồng bộ hóa"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "ktsl1_q12",
      "type": "multiple-choice",
      "text": "Telnet trong tầng ứng dụng sử dụng trong việc?",
      "options": [
        {
          "id": "A",
          "text": "Truy cập mạng từ xa"
        },
        {
          "id": "B",
          "text": "Dịch vụ thư tín điện tử"
        },
        {
          "id": "C",
          "text": "Dịch vụ truyền tệp"
        },
        {
          "id": "D",
          "text": "Dịch vụ truyền âm thanh"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl1_q12_1",
      "type": "multiple-choice",
      "text": "TCP/IP được xem là giản lược của mô hình tham chiếu OSI với bao nhiêu tầng?",
      "options": [
        {
          "id": "A",
          "text": "4"
        },
        {
          "id": "B",
          "text": "5"
        },
        {
          "id": "C",
          "text": "6"
        },
        {
          "id": "D",
          "text": "7"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl1_q13",
      "type": "multiple-choice",
      "text": "Tầng vận chuyển trong mô hình TCP/IP liên quan đến chủ đề về chất lượng dịch vụ như?",
      "options": [
        {
          "id": "A",
          "text": "Độ tin cậy"
        },
        {
          "id": "B",
          "text": "Cả 03 đáp án trên đều đúng"
        },
        {
          "id": "C",
          "text": "Kiểm soát luồng"
        },
        {
          "id": "D",
          "text": "Kiểm soát lỗi"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl1_q13_1",
      "type": "multiple-choice",
      "text": "Cách bố trí vật lý của 10Base2 được trình bày trong hình sau đây bao gồm các đầu nối và cáp được sử dụng là:",
      "image": "/images/ktsl/ktsl_b1_img6.png",
      "options": [
        {
          "id": "A",
          "text": "Cáp đồng trục nhỏ"
        },
        {
          "id": "B",
          "text": "Cả 03 đáp án trên"
        },
        {
          "id": "C",
          "text": "Các đầu nối BNC-T"
        },
        {
          "id": "D",
          "text": "NICs"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl1_q13_2",
      "type": "multiple-choice",
      "text": "Mục tiêu chính của mạng truyền số liệu là gì?",
      "options": [
        {
          "id": "A",
          "text": "Giảm chi phí phần cứng máy tính"
        },
        {
          "id": "B",
          "text": "Đảm bảo truyền tin nhanh, tin cậy và bảo mật giữa các thiết bị"
        },
        {
          "id": "C",
          "text": "Tăng tốc độ xử lý của CPU"
        },
        {
          "id": "D",
          "text": "Tăng khả năng lưu trữ dữ liệu trong hệ thống"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl1_q14",
      "type": "multiple-choice",
      "text": "Mô hình TCP/IP hướng đến tối đa độ linh hoạt tại tầng nào cho người phát triển phần mềm?",
      "options": [
        {
          "id": "A",
          "text": "Tầng ứng dụng"
        },
        {
          "id": "B",
          "text": "Tầng vận chuyển"
        },
        {
          "id": "C",
          "text": "Internet"
        },
        {
          "id": "D",
          "text": "Truy cập mạng"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl1_q14_1",
      "type": "multiple-choice",
      "text": "Hình vẽ sau đây mô tả các đoạn Ethernet loại nào?",
      "image": "/images/ktsl/ktsl_b1_img4.png",
      "options": [
        {
          "id": "A",
          "text": "Các đoạn Ethernet 10Base5"
        },
        {
          "id": "B",
          "text": "Các đoạn Ethernet 10Base3"
        },
        {
          "id": "C",
          "text": "Các đoạn Ethernet 10Base4"
        },
        {
          "id": "D",
          "text": "Các đoạn Ethernet 10Base6"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl1_q14_2",
      "type": "multiple-choice",
      "text": "Thông tin dữ liệu trong truyền số liệu thường được biểu diễn dưới dạng:",
      "options": [
        {
          "id": "A",
          "text": "Dạng số nhị phân (bit)"
        },
        {
          "id": "B",
          "text": "Dạng hình ảnh"
        },
        {
          "id": "C",
          "text": "Dạng mã Morse"
        },
        {
          "id": "D",
          "text": "Dạng analog"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl1_q15",
      "type": "multiple-choice",
      "text": "Hình vẽ dưới đây mô tả khung MAC của chuẩn nào?",
      "image": "/images/ktsl/ktsl_b1_img2.png",
      "options": [
        {
          "id": "A",
          "text": "Khung MAC của 802.5"
        },
        {
          "id": "B",
          "text": "Khung MAC của 802.4"
        },
        {
          "id": "C",
          "text": "Khung MAC của 802.11"
        },
        {
          "id": "D",
          "text": "Khung MAC của 802.3"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl1_q15_1",
      "type": "multiple-choice",
      "text": "Mục tiêu của dự án IEEE 802 là:",
      "options": [
        {
          "id": "A",
          "text": "Xây dựng chuẩn cho các hệ thống mạng cục bộ (LAN) và mạng đô thị (MAN)"
        },
        {
          "id": "B",
          "text": "Phát triển giao thức truyền file FTP"
        },
        {
          "id": "C",
          "text": "Chuẩn hóa giao thức Internet"
        },
        {
          "id": "D",
          "text": "Thiết lập các tiêu chuẩn bảo mật mạng toàn cầu"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl1_q15_2",
      "type": "multiple-choice",
      "text": "Lớp vận chuyển (Transport) đảm nhiệm vai trò gì?",
      "options": [
        {
          "id": "A",
          "text": "Định tuyến gói tin giữa các mạng"
        },
        {
          "id": "B",
          "text": "Giao tiếp trực tiếp với lớp vật lý"
        },
        {
          "id": "C",
          "text": "Chia nhỏ khung dữ liệu"
        },
        {
          "id": "D",
          "text": "Cung cấp truyền tin đầu cuối đáng tin cậy"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl1_q15_3",
      "type": "multiple-select",
      "text": "Lớp ứng dụng của mô hình TCP/IP bao gồm các giao thức nào? (Chọn 2 đáp án)",
      "options": [
        {
          "id": "A",
          "text": "IP"
        },
        {
          "id": "B",
          "text": "FTP"
        },
        {
          "id": "C",
          "text": "HTTP"
        },
        {
          "id": "D",
          "text": "ARP"
        }
      ],
      "correctAnswers": [
        "B",
        "C"
      ]
    }
  ],
  "ktsl_2": [
    {
      "id": "ktsl2_q1",
      "type": "multiple-choice",
      "text": "Token Bus (IEEE 802.4) kết hợp các đặc tính của?",
      "options": [
        {
          "id": "A",
          "text": "Ethernet và MAN"
        },
        {
          "id": "B",
          "text": "Ethernet và Token Ring"
        },
        {
          "id": "C",
          "text": "Ethernet và phần cứng"
        },
        {
          "id": "D",
          "text": "Ethernet và LAN"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl2_q1_1",
      "type": "multiple-choice",
      "text": "Token Ring dùng địa chỉ bao nhiêu byte trong NIC tương tự như địa chỉ của Ethernet?",
      "options": [
        {
          "id": "A",
          "text": "7 bytes"
        },
        {
          "id": "B",
          "text": "5 bytes"
        },
        {
          "id": "C",
          "text": "6 bytes"
        },
        {
          "id": "D",
          "text": "8 bytes"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "ktsl2_q2",
      "type": "multiple-choice",
      "text": "Hình vẽ dưới đây mô tả cấu trúc khung của?",
      "image": "/images/ktsl_b2/ktsl_b2_img3.png",
      "options": [
        {
          "id": "A",
          "text": "Token Bus"
        },
        {
          "id": "B",
          "text": "Token SD"
        },
        {
          "id": "C",
          "text": "Token Data"
        },
        {
          "id": "D",
          "text": "Token Ring"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl2_q2_1",
      "type": "multiple-choice",
      "text": "Trường SD trong khung Data/Command có nhiệm vụ gì?",
      "options": [
        {
          "id": "A",
          "text": "Thông báo bộ thu biết có khung đến và giúp đồng bộ"
        },
        {
          "id": "B",
          "text": "Thông báo trường địa chỉ biết có khung đến và giúp đồng bộ"
        },
        {
          "id": "C",
          "text": "Thông báo bộ nhận biết có khung đến và giúp đồng bộ"
        },
        {
          "id": "D",
          "text": "Thông báo trường điều khiển biết có khung đến và giúp đồng bộ"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl2_q3",
      "type": "multiple-choice",
      "text": "Công nghệ mạng cục bộ Token Ring là giao thức truyền thông cho mạng nào?",
      "options": [
        {
          "id": "A",
          "text": "Mạng diện rộng"
        },
        {
          "id": "B",
          "text": "Mạng cục bộ"
        },
        {
          "id": "C",
          "text": "Mạng vệ tinh"
        },
        {
          "id": "D",
          "text": "Mạng viba"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl2_q3_1",
      "type": "multiple-choice",
      "text": "Trường SD trong khung Data/Command chứa dữ liệu và có thể dài tối đa bao nhiêu byte?",
      "options": [
        {
          "id": "A",
          "text": "3500 byte"
        },
        {
          "id": "B",
          "text": "4500 byte"
        },
        {
          "id": "C",
          "text": "5500 byte"
        },
        {
          "id": "D",
          "text": "6500 byte"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl2_q4",
      "type": "multiple-choice",
      "text": "Trong khung Data/Command, trường địa chỉ vật lý đích đến có độ dài từ bao nhiêu byte đến bao nhiêu byte?",
      "image": "/images/ktsl_b2/ktsl_b2_img4.png",
      "options": [
        {
          "id": "A",
          "text": "3 byte đến 5 byte"
        },
        {
          "id": "B",
          "text": "2 byte đến 4 byte"
        },
        {
          "id": "C",
          "text": "1 byte đến 3 byte"
        },
        {
          "id": "D",
          "text": "2 byte đến 6 byte"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl2_q4_1",
      "type": "multiple-choice",
      "text": "Trường CRC trong khung Data/Command dùng để làm gì?",
      "image": "/images/ktsl_b2/ktsl_b2_img4.png",
      "options": [
        {
          "id": "A",
          "text": "Phát hiện sai CRC-32"
        },
        {
          "id": "B",
          "text": "Phát hiện sai CRC-02"
        },
        {
          "id": "C",
          "text": "Phát hiện sai CRC-12"
        },
        {
          "id": "D",
          "text": "Phát hiện sai CRC-22"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl2_q4_2",
      "type": "multiple-choice",
      "text": "Trong mô hình MAU như hình dưới, một MAU có thể trợ giúp bao nhiêu trạm?",
      "image": "/images/ktsl_b2/ktsl_b2_img2.png",
      "options": [
        {
          "id": "A",
          "text": "12"
        },
        {
          "id": "B",
          "text": "8"
        },
        {
          "id": "C",
          "text": "10"
        },
        {
          "id": "D",
          "text": "6"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl2_q5",
      "type": "multiple-choice",
      "text": "Mục đích chính của IP là gì?",
      "options": [
        {
          "id": "A",
          "text": "Sử dụng trong các mạng thế hệ mới"
        },
        {
          "id": "B",
          "text": "Sử dụng trong các mạng không có sự liên hệ với Internet"
        },
        {
          "id": "C",
          "text": "Sử dụng trong các mạng di động nâng cao"
        },
        {
          "id": "D",
          "text": "Cung cấp khả năng kết nối các mạng con thành liên mạng để truyền dữ liệu"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl2_q5_1",
      "type": "multiple-choice",
      "text": "Vai trò của IP tương tự vai trò của giao thức tầng nào trong mô hình OSI?",
      "options": [
        {
          "id": "A",
          "text": "Tầng mạng"
        },
        {
          "id": "B",
          "text": "Tầng vận chuyển"
        },
        {
          "id": "C",
          "text": "Tầng trình bày"
        },
        {
          "id": "D",
          "text": "Tầng phiên"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl2_q6",
      "type": "multiple-choice",
      "text": "Đơn vị dữ liệu dùng trong giao thức IP là?",
      "options": [
        {
          "id": "A",
          "text": "mm"
        },
        {
          "id": "B",
          "text": "cm"
        },
        {
          "id": "C",
          "text": "m/s"
        },
        {
          "id": "D",
          "text": "Datagram"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl2_q6_1",
      "type": "multiple-select",
      "text": "Một Datagram trong giao thức IP được chia làm những phần nào sau đây? (Chọn 2 đáp án)",
      "options": [
        {
          "id": "A",
          "text": "Phần tiêu đề (Header)"
        },
        {
          "id": "B",
          "text": "Phần chứa dữ liệu cần truyền (Data)"
        },
        {
          "id": "C",
          "text": "Phần điều khiển (Control)"
        },
        {
          "id": "D",
          "text": "Phần địa chỉ (Address)"
        }
      ],
      "correctAnswers": [
        "A",
        "B"
      ]
    },
    {
      "id": "ktsl2_q7",
      "type": "multiple-choice",
      "text": "Địa chỉ mạng IP 10.0.0.0/8 có bao nhiêu subnet con khi chia thành các subnet có subnet mask /16?",
      "options": [
        {
          "id": "A",
          "text": "256"
        },
        {
          "id": "B",
          "text": "64"
        },
        {
          "id": "C",
          "text": "128"
        },
        {
          "id": "D",
          "text": "2"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl2_q7_1",
      "type": "multiple-choice",
      "text": "Từ hình vẽ cấu trúc phân lớp địa chỉ IP dưới đây, địa chỉ lớp A có giá trị?",
      "image": "/images/ktsl_b2/ktsl_b2_img1.png",
      "options": [
        {
          "id": "A",
          "text": "Nhỏ hơn 129"
        },
        {
          "id": "B",
          "text": "Nhỏ hơn 130"
        },
        {
          "id": "C",
          "text": "Nhỏ hơn 128"
        },
        {
          "id": "D",
          "text": "Nhỏ hơn 135"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "ktsl2_q8",
      "type": "multiple-choice",
      "text": "Địa chỉ IPv4 có bao nhiêu bit?",
      "options": [
        {
          "id": "A",
          "text": "128 bit"
        },
        {
          "id": "B",
          "text": "32 bit"
        },
        {
          "id": "C",
          "text": "16 bit"
        },
        {
          "id": "D",
          "text": "64 bit"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl2_q8_1",
      "type": "multiple-choice",
      "text": "Từ hình vẽ cấu trúc phân lớp địa chỉ IP dưới đây, địa chỉ lớp C có giá trị?",
      "image": "/images/ktsl_b2/ktsl_b2_img1.png",
      "options": [
        {
          "id": "A",
          "text": "Từ 195 đến 226"
        },
        {
          "id": "B",
          "text": "Từ 192 đến 223"
        },
        {
          "id": "C",
          "text": "Từ 193 đến 224"
        },
        {
          "id": "D",
          "text": "Từ 194 đến 225"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl2_q9",
      "type": "multiple-choice",
      "text": "Địa chỉ IPv6 có bao nhiêu bit?",
      "options": [
        {
          "id": "A",
          "text": "128 bit"
        },
        {
          "id": "B",
          "text": "32 bit"
        },
        {
          "id": "C",
          "text": "256 bit"
        },
        {
          "id": "D",
          "text": "64 bit"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl2_q10",
      "type": "multiple-choice",
      "text": "Trong các địa chỉ IP dưới đây, địa chỉ nào thuộc lớp A?",
      "options": [
        {
          "id": "A",
          "text": "224.0.0.1"
        },
        {
          "id": "B",
          "text": "192.168.1.1"
        },
        {
          "id": "C",
          "text": "172.16.0.1"
        },
        {
          "id": "D",
          "text": "10.0.0.1"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl2_q11",
      "type": "multiple-choice",
      "text": "Trong các địa chỉ IP dưới đây, địa chỉ nào thuộc lớp C?",
      "options": [
        {
          "id": "A",
          "text": "224.0.0.1"
        },
        {
          "id": "B",
          "text": "128.0.0.1"
        },
        {
          "id": "C",
          "text": "192.168.0.1"
        },
        {
          "id": "D",
          "text": "10.0.0.1"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "ktsl2_q11_1",
      "type": "multiple-choice",
      "text": "Trong các địa chỉ IP dưới đây, địa chỉ nào thuộc lớp B?",
      "options": [
        {
          "id": "A",
          "text": "172.16.0.1"
        },
        {
          "id": "B",
          "text": "192.168.1.1"
        },
        {
          "id": "C",
          "text": "10.10.10.10"
        },
        {
          "id": "D",
          "text": "224.0.0.1"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl2_q12",
      "type": "multiple-choice",
      "text": "Địa chỉ IP nào sau đây là địa chỉ gateway mặc định trong mạng lớp C (subnet mask 255.255.255.0)?",
      "options": [
        {
          "id": "A",
          "text": "192.168.1.1"
        },
        {
          "id": "B",
          "text": "192.168.1.255"
        },
        {
          "id": "C",
          "text": "192.168.1.128"
        },
        {
          "id": "D",
          "text": "192.168.1.0"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl2_q13",
      "type": "multiple-choice",
      "text": "Địa chỉ IP 192.168.1.0/24 có thể chia thành bao nhiêu mạng con nếu chia theo mặt nạ 255.255.255.192?",
      "options": [
        {
          "id": "A",
          "text": "4 mạng con, mỗi mạng có 30 địa chỉ"
        },
        {
          "id": "B",
          "text": "2 mạng con, mỗi mạng có 62 địa chỉ"
        },
        {
          "id": "C",
          "text": "4 mạng con, mỗi mạng có 62 địa chỉ"
        },
        {
          "id": "D",
          "text": "8 mạng con, mỗi mạng có 30 địa chỉ"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "ktsl2_q14",
      "type": "multiple-choice",
      "text": "Mặt nạ mạng 255.255.255.248 có thể cung cấp bao nhiêu địa chỉ IP khả dụng cho các thiết bị trong mỗi mạng con?",
      "options": [
        {
          "id": "A",
          "text": "62 địa chỉ IP khả dụng"
        },
        {
          "id": "B",
          "text": "6 địa chỉ IP khả dụng"
        },
        {
          "id": "C",
          "text": "14 địa chỉ IP khả dụng"
        },
        {
          "id": "D",
          "text": "30 địa chỉ IP khả dụng"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl2_q14_1",
      "type": "multiple-choice",
      "text": "Địa chỉ IP 255.255.255.255 được sử dụng làm địa chỉ nào?",
      "options": [
        {
          "id": "A",
          "text": "Địa chỉ riêng tư"
        },
        {
          "id": "B",
          "text": "Địa chỉ gateway"
        },
        {
          "id": "C",
          "text": "Địa chỉ loopback"
        },
        {
          "id": "D",
          "text": "Địa chỉ broadcast"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl2_q14_2",
      "type": "multiple-choice",
      "text": "Địa chỉ IP nào sau đây có thể được gán cho một host trong mạng 192.168.1.0/24?",
      "options": [
        {
          "id": "A",
          "text": "192.168.0.100"
        },
        {
          "id": "B",
          "text": "192.168.1.0"
        },
        {
          "id": "C",
          "text": "192.168.1.255"
        },
        {
          "id": "D",
          "text": "192.168.1.100"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl2_q15",
      "type": "multiple-choice",
      "text": "Trong mạng Token Ring, việc truyền dữ liệu dựa trên:",
      "options": [
        {
          "id": "A",
          "text": "Truyền đồng thời giữa tất cả các nút"
        },
        {
          "id": "B",
          "text": "Sở hữu token và truyền tuần tự theo vòng"
        },
        {
          "id": "C",
          "text": "Truyền không cần token"
        },
        {
          "id": "D",
          "text": "Định tuyến gói tin thông minh"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl2_q15_1",
      "type": "multiple-select",
      "text": "Modem có vai trò gì? (Chọn 2 đáp án)",
      "options": [
        {
          "id": "A",
          "text": "Biến đổi tín hiệu số - analog để truyền trên đường dây điện thoại"
        },
        {
          "id": "B",
          "text": "Định tuyến dữ liệu trong mạng LAN"
        },
        {
          "id": "C",
          "text": "Kết nối trực tiếp giữa hai máy tính mà không cần mạng"
        },
        {
          "id": "D",
          "text": "Chuyển đổi tín hiệu analog - số tại đầu nhận"
        }
      ],
      "correctAnswers": [
        "A",
        "D"
      ]
    }
  ],
  "ktsl_3": [
    {
      "id": "ktsl3_q1",
      "text": "Mã ASCII được phát triển cho thông tin máy tính vào năm nào ?",
      "options": [
        {
          "id": "A",
          "text": "1965"
        },
        {
          "id": "B",
          "text": "1964"
        },
        {
          "id": "C",
          "text": "1962"
        },
        {
          "id": "D",
          "text": "1963"
        }
      ],
      "image": null,
      "type": "multiple-choice",
      "correctAnswer": "C"
    },
    {
      "id": "ktsl3_q2",
      "text": "Mã ASCII là mã 7 bit và cũng được diễn tả bằng số Hex với số có trọng số cao không vượt quá bao nhiêu ?",
      "options": [
        {
          "id": "A",
          "text": "6 byte"
        },
        {
          "id": "B",
          "text": "8 byte"
        },
        {
          "id": "C",
          "text": "5 byte"
        },
        {
          "id": "D",
          "text": "7 byte"
        }
      ],
      "image": null,
      "type": "multiple-choice",
      "correctAnswer": "D"
    },
    {
      "id": "ktsl3_q2.1",
      "text": "Nhóm kiểm soát truyền trong bảng mã ASCII có bao nhiêu ký tự?",
      "options": [
        {
          "id": "A",
          "text": "8"
        },
        {
          "id": "B",
          "text": "7"
        },
        {
          "id": "C",
          "text": "10"
        },
        {
          "id": "D",
          "text": "9"
        }
      ],
      "image": null,
      "type": "multiple-choice",
      "correctAnswer": "C"
    },
    {
      "id": "ktsl3_q3",
      "text": "Các ký tự điều khiển của ASCII gồm 32 ký tự từ .... đến ..... ?",
      "options": [
        {
          "id": "A",
          "text": "02H đến 3FH"
        },
        {
          "id": "B",
          "text": "01H đến 2FH"
        },
        {
          "id": "C",
          "text": "03H đến 4FH"
        },
        {
          "id": "D",
          "text": "00H đến 1FH"
        }
      ],
      "image": null,
      "type": "multiple-choice",
      "correctAnswer": "D"
    },
    {
      "id": "ktsl3_q4",
      "text": "Nhóm chia rời lượng tin trong bảng mã ASCII có bao nhiêu ký tự ?",
      "options": [
        {
          "id": "A",
          "text": "7"
        },
        {
          "id": "B",
          "text": "5"
        },
        {
          "id": "C",
          "text": "6"
        },
        {
          "id": "D",
          "text": "8"
        }
      ],
      "image": null,
      "type": "multiple-choice",
      "correctAnswer": "B"
    },
    {
      "id": "ktsl3_q4.1",
      "text": "Ký tự NULL trong bảng mã ASCII là ?",
      "options": [
        {
          "id": "A",
          "text": "NULL là byte trống gồm chuỗi bit 2"
        },
        {
          "id": "B",
          "text": "NULL là byte trống gồm chuỗi bit 0"
        },
        {
          "id": "C",
          "text": "NULL là byte trống gồm chuỗi bit 1"
        },
        {
          "id": "D",
          "text": "NULL là byte trống gồm chuỗi bit 0 và chuỗi bit 1"
        }
      ],
      "image": null,
      "type": "multiple-choice",
      "correctAnswer": "B"
    },
    {
      "id": "ktsl3_q5",
      "text": "Stop bit trong đồng bộ byte ký tự là bit biểu diễn sự kết thúc của ký tự bao gồm bao nhiêu bit ? (chọn 03 đáp án đúng)",
      "options": [
        {
          "id": "A",
          "text": "1"
        },
        {
          "id": "B",
          "text": "2"
        },
        {
          "id": "C",
          "text": "3"
        },
        {
          "id": "D",
          "text": "1.5"
        }
      ],
      "image": null,
      "type": "multiple-select",
      "correctAnswers": [
        "A",
        "B",
        "D"
      ]
    },
    {
      "id": "ktsl3_q6",
      "text": "Dữ liệu của một ký tự truyền theo thứ tự thời gian là ?",
      "options": [
        {
          "id": "A",
          "text": "Bit có trọng số thấp nhất (LSB) truyền trước và bit có trọng số cao nhất (MSB) truyền sau cùng"
        },
        {
          "id": "B",
          "text": "Bit có trọng số cao nhất (MSB) truyền trước và bít có trọng số thấp nhất (LSB) truyền sau cùng"
        },
        {
          "id": "C",
          "text": "Bit có trọng số thấp nhất (LSB) và bít có trọng số cao nhất (MSB) truyền đồng thời"
        },
        {
          "id": "D",
          "text": "Bit có trọng số thấp nhất (LSB) truyền trước và bít có trọng số cao nhất (MSB) không cần truyền"
        }
      ],
      "image": null,
      "type": "multiple-choice",
      "correctAnswer": "A"
    },
    {
      "id": "ktsl3_q6.1",
      "text": "Hình vẽ dưới đây biểu diễn việc đồng bộ ?",
      "options": [
        {
          "id": "A",
          "text": "Đồng bộ Byte ký tự"
        },
        {
          "id": "B",
          "text": "Đồng bộ khung"
        },
        {
          "id": "C",
          "text": "Đồng bộ bit"
        },
        {
          "id": "D",
          "text": "Đồng bộ mã"
        }
      ],
      "image": "/images/ktsl_b3/image1.png",
      "type": "multiple-choice",
      "correctAnswer": "A"
    },
    {
      "id": "ktsl3_q7",
      "text": "Mục đích bit kiểm tra chẵn lẻ là ?",
      "options": [
        {
          "id": "A",
          "text": "Để phát hiện xem khi thu một ký tự là đúng hay là sai"
        },
        {
          "id": "B",
          "text": "Để phát hiện nhiễu khi thu một ký tự là đúng hay là sai"
        },
        {
          "id": "C",
          "text": "Để phát hiện xem khi truyền một ký tự là đúng hay là sai"
        },
        {
          "id": "D",
          "text": "Để phát hiện xem khi phát một ký tự là đúng hay là sai"
        }
      ],
      "image": null,
      "type": "multiple-choice",
      "correctAnswer": "A"
    },
    {
      "id": "ktsl3_q7.1",
      "text": "Nếu mất đồng bộ bit thì tốc độ truyền và nhận bị sai nhau nên dữ liệu thu sẽ bị sai do?",
      "options": [
        {
          "id": "A",
          "text": "Nhiều bit bị chồng lấn lên nhau"
        },
        {
          "id": "B",
          "text": "Nhiễu bit"
        },
        {
          "id": "C",
          "text": "Bit lỗi"
        },
        {
          "id": "D",
          "text": "Mất đồng bộ bit"
        }
      ],
      "image": null,
      "type": "multiple-choice",
      "correctAnswer": "D"
    },
    {
      "id": "ktsl3_q8",
      "text": "Trong truyền số liệu nói chung thì bộ thu sẽ lấy mẫu tại ?",
      "options": [
        {
          "id": "A",
          "text": "Cuối mỗi bit"
        },
        {
          "id": "B",
          "text": "Đầu mỗi bit"
        },
        {
          "id": "C",
          "text": "Khoảng cách giữa các bit"
        },
        {
          "id": "D",
          "text": "Trung tâm của mỗi bit"
        }
      ],
      "image": null,
      "type": "multiple-choice",
      "correctAnswer": "D"
    },
    {
      "id": "ktsl3_q8.1",
      "text": "Hình vẽ sau đây biểu diễn nguyên lý?",
      "options": [
        {
          "id": "A",
          "text": "Đồng bộ khung"
        },
        {
          "id": "B",
          "text": "Đồng bộ ký tự"
        },
        {
          "id": "C",
          "text": "Đồng bộ vào song song ra nối tiếp"
        },
        {
          "id": "D",
          "text": "Đồng bộ bit"
        }
      ],
      "image": "/images/ktsl_b3/image2.png",
      "type": "multiple-choice",
      "correctAnswer": "D"
    },
    {
      "id": "ktsl3_q9",
      "text": "Cách mã hóa nhịp vào tín hiệu thường được thực hiện với mã đường dây hay còn được gọi là biến đổi ?",
      "options": [
        {
          "id": "A",
          "text": "Số - Số"
        },
        {
          "id": "B",
          "text": "Tương tự - Tương Tự"
        },
        {
          "id": "C",
          "text": "Tương tự - Số"
        },
        {
          "id": "D",
          "text": "Số - Tương tự"
        }
      ],
      "image": null,
      "type": "multiple-choice",
      "correctAnswer": "A"
    },
    {
      "id": "ktsl3_q9.1",
      "text": "Nếu trong khung truyền có dữ liệu trùng với DLE thì một ký tự nào phải được chèn thêm và phía thu sẽ tự động loại bỏ một ?",
      "options": [
        {
          "id": "A",
          "text": "DLE"
        },
        {
          "id": "B",
          "text": "STX"
        },
        {
          "id": "C",
          "text": "ETX"
        },
        {
          "id": "D",
          "text": "DTE"
        }
      ],
      "image": "/images/ktsl_b3/image3.png",
      "type": "multiple-choice",
      "correctAnswer": "A"
    },
    {
      "id": "ktsl3_q10",
      "text": "Mã hóa Unipolar được mô tả ở hình dưới đây có mức điện áp như thế nào ?",
      "options": [
        {
          "id": "A",
          "text": "Mức điện áp này có 2 cực tính hoặc dương hoặc am thường biểu diễn luan phiên nhau trên hệ toạ độ"
        },
        {
          "id": "B",
          "text": "Mức điện áp này có 2,5 cực tính hoặc dương hoặc am thường biểu diễn luân phiên nhau trên hệ toạ độ"
        },
        {
          "id": "C",
          "text": "Mức điện ap này có 3 cực tính hoặc dương hoặc am thường biểu diễn luan phiên nhau trên hệ toạ độ"
        },
        {
          "id": "D",
          "text": "Mức điện áp này chỉ có một cực tính hoặc dương hoặc âm thuờng đại diện cho bit 1, con trạng thái còn lại là 0"
        }
      ],
      "image": null,
      "type": "multiple-choice",
      "correctAnswer": "D"
    },
    {
      "id": "ktsl3_q10.1",
      "text": "Thực tế có hai loại kiểm soát truyền đồng bộ là ? (chọn 02 đáp án đúng)",
      "options": [
        {
          "id": "A",
          "text": "Định hướng ký tự"
        },
        {
          "id": "B",
          "text": "Định hướng khung"
        },
        {
          "id": "C",
          "text": "Định hướng Bit"
        },
        {
          "id": "D",
          "text": "Định hướng lỗi bit"
        }
      ],
      "image": null,
      "type": "multiple-select",
      "correctAnswers": [
        "A",
        "C"
      ]
    },
    {
      "id": "ktsl3_q11",
      "text": "nhìn vào hình ve được biểu diễn dưới đay Em hay cho biết dãy nhị phân dưới đay bieu diễn theo mã nào?",
      "options": [
        {
          "id": "A",
          "text": "NRZ-1"
        },
        {
          "id": "B",
          "text": "NRZ - L"
        },
        {
          "id": "C",
          "text": "Unipolar"
        },
        {
          "id": "D",
          "text": "RZ"
        }
      ],
      "image": "/images/ktsl_b3/image4.png",
      "type": "multiple-choice",
      "correctAnswer": "B"
    },
    {
      "id": "ktsl3_q11.1",
      "text": "Hình vẽ dưới đây mô tả ?",
      "options": [
        {
          "id": "A",
          "text": "Các loại mã đồng bộ bit"
        },
        {
          "id": "B",
          "text": "Các loại giải mã đường dây"
        },
        {
          "id": "C",
          "text": "Các loại mã hóa đường dây"
        },
        {
          "id": "D",
          "text": "Các loại mã không đồng bộ bit"
        }
      ],
      "image": "/images/ktsl_b3/image5.png",
      "type": "multiple-choice",
      "correctAnswer": "C"
    },
    {
      "id": "ktsl3_q12",
      "text": "Nhìn vào đồ thị dưới đây Em hãy cho biết dãy nhị phân dưới đây biểu diễn theo mã nào ? Biên độ t0",
      "options": [
        {
          "id": "A",
          "text": "Manchester"
        },
        {
          "id": "B",
          "text": "NRZ -I"
        },
        {
          "id": "C",
          "text": "NRZ -L"
        },
        {
          "id": "D",
          "text": "RZ"
        }
      ],
      "image": "/images/ktsl_b3/image6.png",
      "type": "multiple-choice",
      "correctAnswer": "D"
    },
    {
      "id": "ktsl3_q13",
      "text": "Hình vẽ dưới đây mô tả truyền định hướng ký tự với kiểu định dạng nào ?",
      "options": [
        {
          "id": "A",
          "text": "Định dạng theo thời gian"
        },
        {
          "id": "B",
          "text": "Định dạng ký tự"
        },
        {
          "id": "C",
          "text": "Định dạng bit"
        },
        {
          "id": "D",
          "text": "Định dạng khung"
        }
      ],
      "image": "/images/ktsl_b3/image7.png",
      "type": "multiple-choice",
      "correctAnswer": "B"
    },
    {
      "id": "ktsl3_q14",
      "text": "Truyền một ký tự dùng mã ASCII 7 bit và có kiểm tra chẵn lẻ với 1 start bit và 2 stop bit thì hiệu suất bằng ?",
      "options": [
        {
          "id": "A",
          "text": "75 %"
        },
        {
          "id": "B",
          "text": "80%"
        },
        {
          "id": "C",
          "text": "70 %"
        },
        {
          "id": "D",
          "text": "85 %"
        }
      ],
      "image": null,
      "type": "multiple-choice",
      "correctAnswer": "C"
    },
    {
      "id": "ktsl3_q14.1",
      "text": "Hình vẽ dưới đây mô tả truyền định hướng ký tự với kiểu truyền nào?",
      "options": [
        {
          "id": "A",
          "text": "Kiểu truyền có nhiễu kèm theo dữ liệu mới"
        },
        {
          "id": "B",
          "text": "Kiểu truyền trong suốt dữ liệu"
        },
        {
          "id": "C",
          "text": "Kiểu truyền được đóng gói dữ liệu"
        },
        {
          "id": "D",
          "text": "Kiểu truyền chèn thêm dữ liệu mới"
        }
      ],
      "image": "/images/ktsl_b3/image8.png",
      "type": "multiple-choice",
      "correctAnswer": "B"
    },
    {
      "id": "ktsl3_q15",
      "text": "Đồng bộ bit trong truyền đồng bộ dùng để: (Chọn 02 đáp án đúng)",
      "options": [
        {
          "id": "A",
          "text": "Đồng bộ tín hiệu từng bit"
        },
        {
          "id": "B",
          "text": "Phát hiện lỗi bit"
        },
        {
          "id": "C",
          "text": "Đồng bộ toàn bộ khung dữ liệu"
        },
        {
          "id": "D",
          "text": "Mã hóa ký tự"
        }
      ],
      "image": null,
      "type": "multiple-select",
      "correctAnswers": [
        "A",
        "C"
      ]
    },
    {
      "id": "ktsl3_q16",
      "text": "Trong định hướng bit với kiểu truyền dùng các cặp ký tự SYN cũng như kèm theo các ký tự như STX, ETX, và DLE thường dẫn đến hiệu suất của đường truyền sẽ như thế nào ?",
      "options": [
        {
          "id": "A",
          "text": "Hiệu suất tối ưu"
        },
        {
          "id": "B",
          "text": "Hiệu suất chỉ đạt 55%"
        },
        {
          "id": "C",
          "text": "Hiệu suất kém"
        },
        {
          "id": "D",
          "text": "Hiệu suất cao"
        }
      ],
      "image": null,
      "type": "multiple-choice",
      "correctAnswer": "C"
    }
  ],
  "ktsl_4": [
    {
      "id": "ktsl4_q1",
      "type": "multiple-choice",
      "text": "Hình ảnh dưới đây mô tả tín hiệu gì?",
      "image": "/images/ktsl_b4/ktsl_b4_img1.png",
      "options": [
        {
          "id": "A",
          "text": "Tín hiệu nhiễu ngẫu nhiên khi có tác động của môi trường"
        },
        {
          "id": "B",
          "text": "Tín hiệu ở ngõ ra đồng pha với tín hiệu ngõ vào"
        },
        {
          "id": "C",
          "text": "Tín hiệu ở đầu ra khi có nhiễu tác động ở đầu vào dữ liệu"
        },
        {
          "id": "D",
          "text": "Tín hiệu dải nền cộng phiên AWGN"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl4_q1_1",
      "type": "multiple-choice",
      "text": "Tín hiệu truyền trên đường truyền nếu bỏ qua các tác động khác thì ít nhất cũng chịu tác động khách quan của môi trường đó là?",
      "options": [
        {
          "id": "A",
          "text": "Nhiễu ngẫu nhiên"
        },
        {
          "id": "B",
          "text": "Hiện tượng Fading"
        },
        {
          "id": "C",
          "text": "Hiện tượng lỗi bit"
        },
        {
          "id": "D",
          "text": "Nhiễu xuyên kênh"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl4_q2",
      "type": "multiple-choice",
      "text": "Hình vẽ dưới đây mô tả xác suất lỗi khi truyền bit nào?",
      "image": "/images/ktsl_b4/ktsl_b4_img2.png",
      "options": [
        {
          "id": "A",
          "text": "Bit 3"
        },
        {
          "id": "B",
          "text": "Bit 2"
        },
        {
          "id": "C",
          "text": "Bit 0"
        },
        {
          "id": "D",
          "text": "Bit 1"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl4_q3",
      "type": "multiple-choice",
      "text": "Hình vẽ dưới đây mô tả xác suất lổi khi truyền bit nào?",
      "image": "/images/ktsl_b4/ktsl_b4_img3.png",
      "options": [
        {
          "id": "A",
          "text": "Bit 1"
        },
        {
          "id": "B",
          "text": "Bit 0"
        },
        {
          "id": "C",
          "text": "Bit 3"
        },
        {
          "id": "D",
          "text": "Bit 2"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl4_q4",
      "type": "multiple-select",
      "text": "Mục dịch truyền dữ liệu là đạt độ chính xác cao nhất, do đó cần có cơ chế để phát hiện sai nhằm mục đích? (Chọn 02 đáp án đúng)",
      "options": [
        {
          "id": "A",
          "text": "Không truyền lại"
        },
        {
          "id": "B",
          "text": "Truyền lại"
        },
        {
          "id": "C",
          "text": "Sửa sai"
        },
        {
          "id": "D",
          "text": "Không sửa sai"
        }
      ],
      "correctAnswers": [
        "B",
        "C"
      ]
    },
    {
      "id": "ktsl4_q4_1",
      "type": "multiple-choice",
      "text": "Hình vẽ sau đây mô tả phương pháp nào trong các phương pháp phát hiện sai khi truyền dữ liệu?",
      "image": "/images/ktsl_b4/ktsl_b4_img4.png",
      "options": [
        {
          "id": "A",
          "text": "Phương pháp lặp lại"
        },
        {
          "id": "B",
          "text": "Phương pháp tạo thông điệp"
        },
        {
          "id": "C",
          "text": "Phương pháp kiểm tra chẵn lẻ"
        },
        {
          "id": "D",
          "text": "Phương pháp tạo bản sao dữ liệu"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl4_q5",
      "type": "multiple-choice",
      "text": "Hình vẽ sau đẩy mô tả phương pháp nào trong các phương pháp phát hiện sai khi truyền dữ liệu?",
      "image": "/images/ktsl_b4/ktsl_b4_img5.png",
      "options": [
        {
          "id": "A",
          "text": "Phương pháp tạo thông điệp"
        },
        {
          "id": "B",
          "text": "Phương pháp Echoing"
        },
        {
          "id": "C",
          "text": "Phương pháp lặp"
        },
        {
          "id": "D",
          "text": "Phương pháp tạo bản sao tín hiệu"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl4_q5_1",
      "type": "multiple-choice",
      "text": "Nhược điểm của kiểm tra chẳn lẻ là không thể phát hiện được?",
      "options": [
        {
          "id": "A",
          "text": "Tổng số bit đúng là chẵn"
        },
        {
          "id": "B",
          "text": "Tổng số bit đúng là lẻ"
        },
        {
          "id": "C",
          "text": "Tổng số bit sai là chẵn"
        },
        {
          "id": "D",
          "text": "Tổng số bit sai là lẻ"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "ktsl4_q5_2",
      "type": "multiple-choice",
      "text": "Ưu điểm của phương pháp kiểm tra tổng khối là?",
      "options": [
        {
          "id": "A",
          "text": "Có khả năng phát hiện tất cả các bit đúng chẵn"
        },
        {
          "id": "B",
          "text": "Có khả năng phát hiện tất cả các bit sai chẵn"
        },
        {
          "id": "C",
          "text": "Có khả năng phát hiện tất cả các bit đúng lẻ"
        },
        {
          "id": "D",
          "text": "Có khả năng phát hiện tất cả các bit sai lẻ"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl4_q6",
      "type": "multiple-choice",
      "text": "Vận dụng kiến thức đã học về mã Hamming, em hãy cho biết mã Hamming (7,4) có ý nghĩa gì?",
      "options": [
        {
          "id": "A",
          "text": "Mã Hamming có 4 bit tổng cộng, bao gồm cả dữ liệu và bit kiểm tra"
        },
        {
          "id": "B",
          "text": "Mã Hamming có 7 bit tổng cộng, bao gồm cả dữ liệu và bit kiểm tra"
        },
        {
          "id": "C",
          "text": "Mã Hamming có 4 bit dữ liệu và 7 bit kiểm tra lỗi"
        },
        {
          "id": "D",
          "text": "Mã Hamming có 7 bit dữ liệu và 4 bit kiểm tra lỗi"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl4_q7",
      "type": "multiple-choice",
      "text": "Hình về sau mô tà cấu trúc của ... trong kỹ thuật Packed Decimal?",
      "image": "/images/ktsl_b4/ktsl_b4_img6.png",
      "options": [
        {
          "id": "A",
          "text": "Cấu trúc truyền định hướng byte"
        },
        {
          "id": "B",
          "text": "Cấu trúc truyền định hướng bít"
        },
        {
          "id": "C",
          "text": "Cấu trúc nén dữ liệu"
        },
        {
          "id": "D",
          "text": "Cấu trúc của khung truyền"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl4_q7_1",
      "type": "multiple-choice",
      "text": "Trong kỹ thuật Packed Decimal, mỗi byte lưu trữ bao nhiêu chữ số thập phân?",
      "options": [
        {
          "id": "A",
          "text": "1 chữ số thập phân"
        },
        {
          "id": "B",
          "text": "4 chữ số thập phân"
        },
        {
          "id": "C",
          "text": "2 chữ số thập phân"
        },
        {
          "id": "D",
          "text": "8 chữ số thập phần"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "ktsl4_q8",
      "type": "multiple-choice",
      "text": "Mã hóa Huffman có thể đảm bảo điều gi trong quả trình nén dữ liệu?",
      "options": [
        {
          "id": "A",
          "text": "Đảm bảo rằng tất cả các ký tự đều có độ dài mã như nhau"
        },
        {
          "id": "B",
          "text": "Đảm bảo tốc độ truyền tải dữ liệu cao hơn"
        },
        {
          "id": "C",
          "text": "Đảm bảo không có sự mất mát dữ liệu"
        },
        {
          "id": "D",
          "text": "Đảm bảo rằng dữ liệu được mã hóa không thế giải mã được"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "ktsl4_q8_1",
      "type": "multiple-choice",
      "text": "Hình vẽ sau mô tả khung loại nào?",
      "image": "/images/ktsl_b4/ktsl_b4_img7.png",
      "options": [
        {
          "id": "A",
          "text": "Khung định hướng bit"
        },
        {
          "id": "B",
          "text": "Khung định hướng ký tự"
        },
        {
          "id": "C",
          "text": "Khung định hướng byte"
        },
        {
          "id": "D",
          "text": "Khung biểu diễn các mã BCD"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl4_q8_2",
      "type": "multiple-choice",
      "text": "Hình vẽ sau đây mô tả khung loại nào?",
      "image": "/images/ktsl_b4/ktsl_b4_img8.png",
      "options": [
        {
          "id": "A",
          "text": "Khung định hướng ký tự"
        },
        {
          "id": "B",
          "text": "Khung định hướng bit"
        },
        {
          "id": "C",
          "text": "Khung định hướng byte"
        },
        {
          "id": "D",
          "text": "Khung biểu diễn các mã BCD"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl4_q9",
      "type": "multiple-choice",
      "text": "Trong cây Huffman, các ký tự có tần suất xuất hiện lớn hơn sẽ có mã nhị phân:",
      "options": [
        {
          "id": "A",
          "text": "Dài hơn"
        },
        {
          "id": "B",
          "text": "Giống nhau"
        },
        {
          "id": "C",
          "text": "Ngắn hơn"
        },
        {
          "id": "D",
          "text": "Không thay đổi"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "ktsl4_q9_1",
      "type": "multiple-choice",
      "text": "Mã hóa Huffman có thể mã hóa tốt nhất cho loại dữ liệu nào?",
      "options": [
        {
          "id": "A",
          "text": "Dữ liệu với tần suất ký tự đều"
        },
        {
          "id": "B",
          "text": "Dữ liệu có cấu trúc phức tạp"
        },
        {
          "id": "C",
          "text": "Dữ liệu với tần suất ký tự không đều"
        },
        {
          "id": "D",
          "text": "Dữ liệu có số lượng ký tự rất lớn"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "ktsl4_q10",
      "type": "multiple-choice",
      "text": "Kết quả cuối cùng của việc xây dựng cây Huffman là?",
      "options": [
        {
          "id": "A",
          "text": "Một danh sách các ký tự đã được sắp xếp"
        },
        {
          "id": "B",
          "text": "Một cây nhị phân chứa các ký tự và mã của chúng"
        },
        {
          "id": "C",
          "text": "Một bảng tần suất các ký tự"
        },
        {
          "id": "D",
          "text": "Một chuỗi nhị phân của tất cả các ký tự"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl4_q10_1",
      "type": "multiple-choice",
      "text": "Quá trình xây dựng cây Huffman tiếp tục cho đến khi nào?",
      "options": [
        {
          "id": "A",
          "text": "Tất cả các ký tự và cây con đã được kết hợp thành một cây duy nhất"
        },
        {
          "id": "B",
          "text": "Tất cả các ký tự đã có tần suất xuất hiện bằng nhau"
        },
        {
          "id": "C",
          "text": "Tất cả các ký tự đã có mã nhị phân"
        },
        {
          "id": "D",
          "text": "Đã xây dựng đủ số lượng cây con"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl4_q10_2",
      "type": "multiple-choice",
      "text": "Cấu trúc cây trong mã hóa Huffman có đặc điểm gì?",
      "options": [
        {
          "id": "A",
          "text": "Mỗi nút trong cây đại diện cho một ký tự và tần suất của nó"
        },
        {
          "id": "B",
          "text": "Cây có chiều cao cố định"
        },
        {
          "id": "C",
          "text": "Cây là một cây nhị phân không hoàn chỉnh"
        },
        {
          "id": "D",
          "text": "Cây là một cây nhị phân đầy đủ"
        }
      ],
      "correctAnswer": "D"
    },
    {
      "id": "ktsl4_q11",
      "type": "multiple-choice",
      "text": "Trong nén facsimile, phương pháp nén nào được sử dụng phổ biến trong truyền fax?",
      "options": [
        {
          "id": "A",
          "text": "Nén LZW"
        },
        {
          "id": "B",
          "text": "Nén Group 3 và Group 4"
        },
        {
          "id": "C",
          "text": "Nén Run-Length Encoding (RLE)"
        },
        {
          "id": "D",
          "text": "Nén JPEG"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl4_q12",
      "type": "multiple-choice",
      "text": "Kỹ thuật nén facsimile Group 3 được đặc trưng bởi?",
      "options": [
        {
          "id": "A",
          "text": "Độ nén rất thấp, thích hợp cho văn bản dài"
        },
        {
          "id": "B",
          "text": "Hỗ trợ nén hình ảnh đơn giản mà hiệu quả, chủ yếu cho hình ảnh trắng đen"
        },
        {
          "id": "C",
          "text": "Sử dụng mã hóa dựa trên các khối hình ảnh"
        },
        {
          "id": "D",
          "text": "Dùng cho hình ảnh màu sắc và có độ phân giải cao"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl4_q12_1",
      "type": "multiple-choice",
      "text": "Nén facsimile Group 4 (G4) cải tiến Group 3 chú yếu nhờ vào?",
      "options": [
        {
          "id": "A",
          "text": "Tăng chất lượng hình ảnh"
        },
        {
          "id": "B",
          "text": "Phương pháp nén bít (bit-level) hiệu quả hơn"
        },
        {
          "id": "C",
          "text": "Việc sử dụng thuật toán nén JPEG"
        },
        {
          "id": "D",
          "text": "Giảm độ phân giải của hình ảnh"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl4_q13",
      "type": "multiple-choice",
      "text": "Phương pháp nén nào trong facsimile thích hợp cho việc gửi tài liệu có chứa cả văn bản và hình ảnh?",
      "options": [
        {
          "id": "A",
          "text": "Group 4 (G4)"
        },
        {
          "id": "B",
          "text": "Group 3 (G3)"
        },
        {
          "id": "C",
          "text": "Lempel-Ziv-Welch (LZW)"
        },
        {
          "id": "D",
          "text": "JPEG"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl4_q14",
      "type": "multiple-choice",
      "text": "Khi gửi fax, một trong các phương pháp nén đặc trưng của nén facsimile là?",
      "options": [
        {
          "id": "A",
          "text": "Nén thông qua phân tích dữ liệu pixel"
        },
        {
          "id": "B",
          "text": "Sử dụng hình ảnh định dạng bitmap"
        },
        {
          "id": "C",
          "text": "Nén thông qua mã hóa Run-Length Encoding (RLE)"
        },
        {
          "id": "D",
          "text": "Nén thông qua phương pháp nén hình ảnh có mất dữ liệu (lossy)"
        }
      ],
      "correctAnswer": "C"
    },
    {
      "id": "ktsl4_q14_1",
      "type": "multiple-choice",
      "text": "Nén Group 3 (G3) chủ yếu sử dụng phương pháp gì để nén dữ liệu?",
      "options": [
        {
          "id": "A",
          "text": "Sử dụng phương pháp nén theo lớp (layering)"
        },
        {
          "id": "B",
          "text": "Sử dụng mã hóa dữ liệu theo độ dài chạy (Run-Length Encoding - RLE)"
        },
        {
          "id": "C",
          "text": "Nén theo tỷ lệ nén tĩnh"
        },
        {
          "id": "D",
          "text": "Dùng mã hóa DCT (Discrete Cosine Transform)"
        }
      ],
      "correctAnswer": "B"
    },
    {
      "id": "ktsl4_q15",
      "type": "multiple-choice",
      "text": "Giả sử có bộ ký tự dưới dây với tần suất xuất hiện như sau: A: 5, B: 9, C: 12, D: 13, E: 16, F: 45. Quá trình kết hợp cây con trong bước đầu tiên sẽ như thế nào?",
      "options": [
        {
          "id": "A",
          "text": "Kết hợp A và B để tạo thành một cây con mới"
        },
        {
          "id": "B",
          "text": "Kết hợp B và C để tạo thành một cây con mới"
        },
        {
          "id": "C",
          "text": "Kết hợp A và C để tạo thành một cây con mới"
        },
        {
          "id": "D",
          "text": "Kết hợp D và E để tạo thành một cây con mới"
        }
      ],
      "correctAnswer": "A"
    },
    {
      "id": "ktsl4_q15_1",
      "type": "multiple-choice",
      "text": "Vận dụng kiến thức đã học về mã đa thức, em hãy cho biết mã đa thức (7,4) có nghĩa là gì?",
      "options": [
        {
          "id": "A",
          "text": "Mã có 4 bit dữ liệu và tổng độ dài của từ mã là 7"
        },
        {
          "id": "B",
          "text": "Mã có 3 bit dữ liệu và tổng độ dài của từ mã là 7"
        },
        {
          "id": "C",
          "text": "Mã có 5 bit dữ liệu và tổng độ dài của từ mã là 7"
        },
        {
          "id": "D",
          "text": "Mã có 6 bit dữ liệu và tổng độ dài của từ mã là 7"
        }
      ],
      "correctAnswer": "A"
    }
  ],
  "ktsl_5": [
    {
      "id": "ktsl5_q1",
      "type": "multiple-choice",
      "text": "Nghi thức idle RQ hoạt động ở Mode nào ?",
      "options": [
        {
          "id": "A",
          "text": "Mode phát hiện lỗi"
        },
        {
          "id": "B",
          "text": "Mode song công"
        },
        {
          "id": "C",
          "text": "Mode bán song công"
        },
        {
          "id": "D",
          "text": "Mode idle"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl5_q2",
      "type": "multiple-select",
      "text": "Ba khung cơ bản nào được biết như các đơn vị dữ liệu nghi thức PDU (Protocol Data Units) của nghi thức idle RQ. (chọn 03 đáp án đúng) Hãy chọn 3 đáp án đúng nhất !",
      "options": [
        {
          "id": "A",
          "text": "NAK-frame"
        },
        {
          "id": "B",
          "text": "ACK"
        },
        {
          "id": "C",
          "text": "I-frame"
        },
        {
          "id": "D",
          "text": "BCC"
        }
      ],
      "image": null,
      "correctAnswers": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "ktsl5_q3",
      "type": "multiple-choice",
      "text": "Trong cấu trúc khung của Idle RQ, một yêu cầu (Request) sẽ được xử lý khi nào? Hãy chọn 1 đáp án đúng nhất !",
      "options": [
        {
          "id": "A",
          "text": "Khi máy chủ vào trạng thái \"Busy\""
        },
        {
          "id": "B",
          "text": "Khi có phản hồi từ phía client"
        },
        {
          "id": "C",
          "text": "Ngay khi yêu cầu được gửi đi"
        },
        {
          "id": "D",
          "text": "Khi máy chủ đang trong trạng thái \"Idle\""
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl5_q4",
      "type": "multiple-choice",
      "text": "Trong một hệ thống sử dụng Idle RQ, trạng thái \"Idle\" chủ yếu đại diện cho điều gì?",
      "options": [
        {
          "id": "A",
          "text": "Máy chủ đang xử lý yêu cầu"
        },
        {
          "id": "B",
          "text": "Máy chủ đang đóng băng"
        },
        {
          "id": "C",
          "text": "Máy chủ chờ nhận yêu cầu mới"
        },
        {
          "id": "D",
          "text": "Máy chủ không nhận yêu cầu mới"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl5_q5",
      "type": "multiple-choice",
      "text": "Cấu trúc khung Idle RQ chủ yếu được áp dụng trong mô hình nào?",
      "options": [
        {
          "id": "A",
          "text": "Mô hình Master-Slave"
        },
        {
          "id": "B",
          "text": "Mô hình Peer-to-Peer"
        },
        {
          "id": "C",
          "text": "Mô hình Client-Server"
        },
        {
          "id": "D",
          "text": "Mô hình Request - Response"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl5_q6",
      "type": "multiple-choice",
      "text": "Mối quan hệ giữa \"Request\" và \"Response\" trong Idle RQ là gì?",
      "options": [
        {
          "id": "A",
          "text": "Request và Response không có sự phụ thuộc lẫn nhau"
        },
        {
          "id": "B",
          "text": "Request được gửi trước và sau đó máy chủ trả về Response"
        },
        {
          "id": "C",
          "text": "Response luôn được gửi trước Request"
        },
        {
          "id": "D",
          "text": "Request và Response đều do client quản lý"
        }
      ],
      "image": null,
      "correctAnswer": "B"
    },
    {
      "id": "ktsl5_q7",
      "type": "multiple-choice",
      "text": "Vận dụng kiến thức đã học về IDLE RQ Em hãy cho biết một trong những ưu điểm của cấu trúc khung Idle RQ là gì?",
      "options": [
        {
          "id": "A",
          "text": "Không yêu cầu kết nối liên tục với client"
        },
        {
          "id": "B",
          "text": "Tăng khả năng chịu tải của máy chủ"
        },
        {
          "id": "C",
          "text": "Quản lý tài nguyên hiệu quả hơn"
        },
        {
          "id": "D",
          "text": "Giảm độ trễ khi chờ yêu cầu"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl5_q8",
      "type": "multiple-choice",
      "text": "Hệ số sử dụng đường truyền của nghi thức idle RQ nhằm mục đích đánh giá vấn đề gì ?",
      "options": [
        {
          "id": "A",
          "text": "Đánh giá khung truyền chứa các ký tự bị nén"
        },
        {
          "id": "B",
          "text": "Đánh giá tín hiệu ở phía nhận khi phía phát truyền đi"
        },
        {
          "id": "C",
          "text": "Đánh giá khung truyền chứa các ký tự lặp lại nhiều lần"
        },
        {
          "id": "D",
          "text": "Đánh giá hiệu quả của nghi thức có tận dụng tốt đường truyền hay không"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl5_q9",
      "type": "multiple-choice",
      "text": "Trong sơ đồ sử dụng đường truyền idle RQ sau đây. Tix là gì ?",
      "options": [
        {
          "id": "A",
          "text": "Thời gian xử lý 01 khung"
        },
        {
          "id": "B",
          "text": "Thời gian truyền 01 byte"
        },
        {
          "id": "C",
          "text": "Thời gian truyền 01 bit"
        },
        {
          "id": "D",
          "text": "Thời gian phát một khung"
        }
      ],
      "image": "/images/ktsl_b5/image1.png",
      "correctAnswer": "D"
    },
    {
      "id": "ktsl5_q16",
      "type": "multiple-select",
      "text": "nghi thức idle RQ có 02 cách truyền nào? (chọn 2 đáp án đúng)",
      "options": [
        {
          "id": "A",
          "text": "Truyền tường minh"
        },
        {
          "id": "B",
          "text": "Truyền hiểu ngầm"
        },
        {
          "id": "C",
          "text": "Truyền không lỗi"
        },
        {
          "id": "D",
          "text": "Truyền tránh nhiễu"
        }
      ],
      "image": null,
      "correctAnswers": [
        "A",
        "B"
      ]
    },
    {
      "id": "ktsl5_q17",
      "type": "multiple-choice",
      "text": "Hình vẽ sau đây mô tả cấu trúc khung của nghi thức nào?",
      "options": [
        {
          "id": "A",
          "text": "Cấu trúc khung của ACK"
        },
        {
          "id": "B",
          "text": "Các cấu trúc khung của idle RQ"
        },
        {
          "id": "C",
          "text": "Cấu trúc khung BCC"
        },
        {
          "id": "D",
          "text": "Cấu trúc khung của N(R)"
        }
      ],
      "image": "/images/ktsl_b5/image2.png",
      "correctAnswer": "B"
    },
    {
      "id": "ktsl5_q18",
      "type": "multiple-choice",
      "text": "Trong cấu trúc khung của idle RQ, một yêu cầu (Request) sẽ được xử lý khi nào?",
      "options": [
        {
          "id": "A",
          "text": "Khi có phản hồi từ phía client"
        },
        {
          "id": "B",
          "text": "Khi máy chủ vào trạng thái “Busy”"
        },
        {
          "id": "C",
          "text": "Ngay khi yêu cầu được gửi đi"
        },
        {
          "id": "D",
          "text": "Khi máy chủ đang trong trạng thái “Idle”"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl5_q19",
      "type": "multiple-choice",
      "text": "nhận định nào sau đây mô tả chính xác về trạng thái “Idle” trong khung RQ",
      "options": [
        {
          "id": "A",
          "text": "Máy chủ đang thực hiện xử lý một yêu cầu"
        },
        {
          "id": "B",
          "text": "Máy chủ không thể nhận yêu cầu mới"
        },
        {
          "id": "C",
          "text": "Máy chủ đang chờ yêu cầu và chưa xử lý gì"
        },
        {
          "id": "D",
          "text": "Máy chủ đã hoàn tất tất cả các yêu cầu"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl5_q20",
      "type": "multiple-choice",
      "text": "sơ đồ sau đây mô tả điều gì?",
      "options": [
        {
          "id": "A",
          "text": "Sơ đồ sử dụng đường truyền idle RQ"
        },
        {
          "id": "B",
          "text": "Sơ đồ thời gian nhận một khung"
        },
        {
          "id": "C",
          "text": "Sơ đồ biểu diễn tốc độ truyền tải dữ liệu của khung"
        },
        {
          "id": "D",
          "text": "Sơ đồ biểu diễn thời gian phát một khung"
        }
      ],
      "image": "/images/ktsl_b5/image3.png",
      "correctAnswer": "A"
    },
    {
      "id": "ktsl5_q21",
      "type": "multiple-choice",
      "text": "Trong sơ đồ sử dụng đường truyền idle RQ sau đây. Tp là gì ?",
      "options": [
        {
          "id": "A",
          "text": "Thời gian xử ly từ P sang S"
        },
        {
          "id": "B",
          "text": "Dữ liệu có cấu trúc phức tạp"
        },
        {
          "id": "C",
          "text": "Thời gian truyền từ P sang S và ngược lại"
        },
        {
          "id": "D",
          "text": "Thời gian phát một khung"
        }
      ],
      "image": "/images/ktsl_b5/image4.png",
      "correctAnswer": "C"
    },
    {
      "id": "ktsl5_q25",
      "type": "multiple-choice",
      "text": "trong cấu trúc idle RQ, khi nào máy chủ sẽ chuyển từ trạng thái “Idle” sang “Busy”?",
      "options": [
        {
          "id": "A",
          "text": "Khi nhận được yêu cầu mới"
        },
        {
          "id": "B",
          "text": "Khi có lỗi xảy ra"
        },
        {
          "id": "C",
          "text": "Khi yêu cầu phản hồi hoàn tất"
        },
        {
          "id": "D",
          "text": "Khi máy chủ thực hiện các phép toán nội bộ"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl5_q26",
      "type": "multiple-choice",
      "text": "Cấu trúc khung Idle RQ có thể giúp tối ưu hóa điều gì trong hệ thống?",
      "options": [
        {
          "id": "A",
          "text": "Tăng tốc độ xử lý dữ liệu"
        },
        {
          "id": "B",
          "text": "Giảm số lượng yêu cầu cần phải xử lý"
        },
        {
          "id": "C",
          "text": "Giảm thiểu băng thông"
        },
        {
          "id": "D",
          "text": "Thời gian chờ của yêu cầu"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl5_q28",
      "type": "multiple-choice",
      "text": "Hình vẽ dưới đây trình bày các ví dụ với Stop and wait ARQ loại nào?",
      "options": [
        {
          "id": "A",
          "text": "Stop and wait ARQ loại hiểu ngầm"
        },
        {
          "id": "B",
          "text": "Stop and wait ARQ loại phát hiện nhiễu"
        },
        {
          "id": "C",
          "text": "Stop and wait ARQ loại phát hiện lỗi"
        },
        {
          "id": "D",
          "text": "Stop and wait ARQ loại tường minh"
        }
      ],
      "image": "/images/ktsl_b5/image5.png",
      "correctAnswer": "D"
    },
    {
      "id": "ktsl5_q29",
      "type": "multiple-choice",
      "text": "Nguyên lý kiểm soát lỗi idle RQ được định nghĩa để cho phép các khung của các ký tự được truyền ?",
      "options": [
        {
          "id": "A",
          "text": "Một cách tin cậy"
        },
        {
          "id": "B",
          "text": "Không bị lỗi"
        },
        {
          "id": "C",
          "text": "Từ phía gửi đến phía nhận"
        },
        {
          "id": "D",
          "text": "Giảm ảnh hưởng của nhiễu"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    }
  ],
  "ktsl_6": [
    {
      "id": "ktsl6_q1",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Với nguyên lý kiểm soát lỗi RQ liên tục sẽ cải thiện hệ số sử dụng đường truyền rất nhiều nhưng bù lại sẽ tốn nhiều bộ nhớ cho vùng nào?"
        },
        {
          "id": "A",
          "text": "Vùng đệm"
        },
        {
          "id": "B",
          "text": "Vùng bị lỗi"
        },
        {
          "id": "C",
          "text": "Vùng không bị lỗi"
        },
        {
          "id": "D",
          "text": "Vùng tin cậy"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl6_q2",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Nghi thức RQ liên tục có đặc điểm gì nổi bật?"
        },
        {
          "id": "A",
          "text": "Chỉ có phản hồi liên tục mà không có yêu cầu"
        },
        {
          "id": "B",
          "text": "Yêu cầu và phản hồi diễn ra một lần duy nhất"
        },
        {
          "id": "C",
          "text": "Không có yêu cầu hoặc phản hồi"
        },
        {
          "id": "D",
          "text": "Yêu cầu được gửi liên tục và phản hồi cũng được trả về liên tục"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl6_q3",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Để duy trì nghi thức Request/Response liên tục, yêu cầu phản hồi phải như thế nào?"
        },
        {
          "id": "A",
          "text": "Phản hồi phải được gửi bất cứ lúc nào trong vòng 1 giây"
        },
        {
          "id": "B",
          "text": "Phản hồi có thể có độ trễ lớn tùy thuộc vào yêu cầu"
        },
        {
          "id": "C",
          "text": "Phản hồi phải được gửi lại ngay lập tức sau yêu cầu"
        },
        {
          "id": "D",
          "text": "Phản hồi phải luôn có sẵn trong hệ thống"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl6_q4",
      "type": "multiple-choice",
      "text": "Hình vẽ dưới đây mô tả?",
      "options": [
        {
          "id": "A",
          "text": "Các cấu hình HDLC"
        },
        {
          "id": "B",
          "text": "Các địa chỉ HDLC"
        },
        {
          "id": "C",
          "text": "Các dữ liệu HDLC"
        },
        {
          "id": "D",
          "text": "Các trạng thái HDLC"
        }
      ],
      "image": "/images/ktsl_b6/image1.png",
      "correctAnswer": "A"
    },
    {
      "id": "ktsl6_q5",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Mỗi khung HDLC có thể chứa bao nhiêu trường?"
        },
        {
          "id": "A",
          "text": "6"
        },
        {
          "id": "B",
          "text": "9"
        },
        {
          "id": "C",
          "text": "7"
        },
        {
          "id": "D",
          "text": "8"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl6_q6",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Trường điều khiển trong HDLC có thể dùng bao nhiêu byte cho quản lý luồng?"
        },
        {
          "id": "A",
          "text": "Một hoặc hai byte"
        },
        {
          "id": "B",
          "text": "Ba hoặc bốn byte"
        },
        {
          "id": "C",
          "text": "Hai hoặc ba byte"
        },
        {
          "id": "D",
          "text": "Chỉ 01 byte duy nhất"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl6_q7",
      "type": "multiple-choice",
      "text": "Hình vẽ sau mô tả trường nào?",
      "options": [
        {
          "id": "A",
          "text": "Trường cờ"
        },
        {
          "id": "B",
          "text": "Trường địa chỉ HDLC"
        },
        {
          "id": "C",
          "text": "Trường thông tin"
        },
        {
          "id": "D",
          "text": "Trường điều khiển"
        }
      ],
      "image": "/images/ktsl_b6/image2.png",
      "correctAnswer": "B"
    },
    {
      "id": "ktsl6_q8",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Để kiểm soát luồng các khung dọc trên đường truyền, một cơ chế được dùng là?"
        },
        {
          "id": "A",
          "text": "Cửa sổ trượt"
        },
        {
          "id": "B",
          "text": "Cửa sổ phát"
        },
        {
          "id": "C",
          "text": "Cửa sổ đợi"
        },
        {
          "id": "D",
          "text": "Cửa sổ nhận"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl6_q9",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Theo nguyên lý đánh số. Với go-back-n một cửa sổ gửi là K, thì việc đánh số ít nhất đến?"
        },
        {
          "id": "A",
          "text": "K + 3"
        },
        {
          "id": "B",
          "text": "K + 2"
        },
        {
          "id": "C",
          "text": "K + 1"
        },
        {
          "id": "D",
          "text": "K + 0.5"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl6_q10",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Một chuỗi các khung có chiều dài 1000 bits được phát dùng nghi thức RQ liên tục. Vận tốc truyền sóng là 2.108 m/s và tỷ lệ bit lỗi đường truyền thấp có thể bỏ qua. Đường truyền dài 1 km, tốc độ 1 Mbps và cửa sổ gửi là K = 2. Xác định Tix?"
        },
        {
          "id": "A",
          "text": "10-5 s"
        },
        {
          "id": "B",
          "text": "10-6 s"
        },
        {
          "id": "C",
          "text": "10-4 s"
        },
        {
          "id": "D",
          "text": "10-3 s"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl6_q11",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Một chuỗi các khung có chiều dài 1000 bits được phát dùng nghi thức RQ liên tục. Vận tốc truyền sóng là 2.108 m/s và tỷ lệ bit lỗi đường truyền thấp có thể bỏ qua. Đường truyền vệ tinh xa 50000 km, tốc độ 2 Mbps và cửa sổ gửi K = 127. Xác định Tix?"
        },
        {
          "id": "A",
          "text": "5.10-5 s"
        },
        {
          "id": "B",
          "text": "5.10-6 s"
        },
        {
          "id": "C",
          "text": "5.10-3 s"
        },
        {
          "id": "D",
          "text": "5.10-4 s"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl6_q12",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Một chuỗi các khung có chiều dài 1000 bits được phát dùng nghi thức RQ liên tục. Vận tốc truyền sóng là 2.108 m/s và tỷ lệ bit lỗi đường truyền thấp có thể bỏ qua. Đường truyền dài 10 km, tốc độ 200 Mbps và cửa sổ gửi là K = 7. Xác định hệ số sử dụng đường truyền?"
        },
        {
          "id": "A",
          "text": "U = 0.5"
        },
        {
          "id": "B",
          "text": "U = 0.55"
        },
        {
          "id": "C",
          "text": "U = 1.55"
        },
        {
          "id": "D",
          "text": "U = 0.33"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl6_q13",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Một chuỗi các khung có chiều dài 1000 bits được phát dùng nghi thức RQ liên tục. Vận tốc truyền sóng là 2.108 m/s và tỷ lệ bit lỗi đường truyền thấp có thể bỏ qua. Đường truyền vệ tinh xa 50000 km, tốc độ 2 Mbps và cửa sổ gửi K = 127. Xác định hệ số sử dụng đường truyền U?"
        },
        {
          "id": "A",
          "text": "U = 0.35"
        },
        {
          "id": "B",
          "text": "U = 0.5"
        },
        {
          "id": "C",
          "text": "U = 0.127"
        },
        {
          "id": "D",
          "text": "U = 0.55"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl6_q14",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Một chuỗi các khung với 1000 bits mỗi khung được truyền dọc một tuyến dài 100 km tại tốc độ 20 Mbps. Nếu vận tốc truyền là 2.108 m/s và tỷ lệ lỗi bit là 4.10-5, xác định Tp?"
        },
        {
          "id": "A",
          "text": "5.10-3 s"
        },
        {
          "id": "B",
          "text": "5.10-2 s"
        },
        {
          "id": "C",
          "text": "5.10-4 s"
        },
        {
          "id": "D",
          "text": "5.10-1 s"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl6_q15",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Một chuỗi các khung với 1000 bits mỗi khung được truyền dọc một tuyến dài 100 km tại tốc độ 20 Mbps. Nếu vận tốc truyền là 2.108 m/s và tỷ lệ lỗi bit là 4.10-5, xác định Tix?"
        },
        {
          "id": "A",
          "text": "5.10-5 s"
        },
        {
          "id": "B",
          "text": "5.10-3 s"
        },
        {
          "id": "C",
          "text": "5.10-2 s"
        },
        {
          "id": "D",
          "text": "5.10-4 s"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl6_q16",
      "type": "multiple-choice",
      "text": "Mô hình nào thường sử dụng nghi thức RQ liên tục",
      "options": [
        {
          "id": "A",
          "text": "Mô hình client-Server"
        },
        {
          "id": "B",
          "text": "Mô hình Peer-to-peer"
        },
        {
          "id": "C",
          "text": "Mô hình Publish-Subcribe"
        },
        {
          "id": "D",
          "text": "Mô hình Master-Slave"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl6_q17",
      "type": "multiple-choice",
      "text": "Trong nghi thức RQ liên tục, phản hồi sẽ được gửi đi khi nào?",
      "options": [
        {
          "id": "A",
          "text": "Sau mỗi yêu cầu mới từ client"
        },
        {
          "id": "B",
          "text": "Khi hệ thống có lỗi"
        },
        {
          "id": "C",
          "text": "Sau khi máy chủ hoàn thành tất cả các yêu cầu"
        },
        {
          "id": "D",
          "text": "Khi có sự thay đổi trong trạng thái hệ thống"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl6_q18",
      "type": "multiple-choice",
      "text": "Một trong những lợi ích của nghi thwucs Request/Response liên tục là gì?",
      "options": [
        {
          "id": "A",
          "text": "Giảm độ trễ giữa các yêu cầu và phản hồi"
        },
        {
          "id": "B",
          "text": "Tăng hiệu quả xử lý khi hệ hống có nhiều tài nguyên"
        },
        {
          "id": "C",
          "text": "Giảm độ trên trong việc gửi yêu cầu"
        },
        {
          "id": "D",
          "text": "Tăng khả năng chịu tải của máy chủ"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl6_q19",
      "type": "multiple-choice",
      "text": "Trong quá trình giao tiếp, hệ thống có thể phải chịu tác động nào khi sử dụng RQ liên tục?",
      "options": [
        {
          "id": "A",
          "text": "Giảm hiệu quả tài nguyên hệ thống"
        },
        {
          "id": "B",
          "text": "Tăng mức độ bão hòa của mạng"
        },
        {
          "id": "C",
          "text": "Tăng độ tin cậy của hệ thống"
        },
        {
          "id": "D",
          "text": "Tăng độ trễ khi xử lý yêu cầu"
        }
      ],
      "image": null,
      "correctAnswer": "B"
    },
    {
      "id": "ktsl6_q20",
      "type": "multiple-choice",
      "text": "Trường FCS trong trường điều khiển dưới đây dùng để làm gì?",
      "options": [
        {
          "id": "A",
          "text": "Đánh số khung gửi"
        },
        {
          "id": "B",
          "text": "Kiểm soát thông tin"
        },
        {
          "id": "C",
          "text": "Ra tín hiệu cờ"
        },
        {
          "id": "D",
          "text": "Phát hiện sai"
        }
      ],
      "image": "/images/ktsl_b6/image3.png",
      "correctAnswer": "D"
    },
    {
      "id": "ktsl6_q21",
      "type": "multiple-choice",
      "text": "Kiểm soát luồng sẽ kiểm soát tốc độ truyền của?",
      "options": [
        {
          "id": "A",
          "text": "Data trên đường truyền"
        },
        {
          "id": "B",
          "text": "Khung trên đường truyền"
        },
        {
          "id": "C",
          "text": "Khung truyền chứa các ký tự lặp lại nhiều lần"
        },
        {
          "id": "D",
          "text": "Khung truyền chứa các ký tự bị nén"
        }
      ],
      "image": null,
      "correctAnswer": "B"
    },
    {
      "id": "ktsl6_q22",
      "type": "multiple-choice",
      "text": "Hình vẽ sau đây mô tả nguyên lý nào?",
      "options": [
        {
          "id": "A",
          "text": "nguyên lý kiểm soát luồng"
        },
        {
          "id": "B",
          "text": "nguyên lý truyền từ P sang S"
        },
        {
          "id": "C",
          "text": "nguyên lý các khung xác nhận và khung đợi"
        },
        {
          "id": "D",
          "text": "nguyên lý về thứ tự truyền các khung"
        }
      ],
      "image": "/images/ktsl_b6/image4.png",
      "correctAnswer": "A"
    },
    {
      "id": "ktsl6_q23",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Một chuỗi các khung có chiều dài 1000 bits được phát dùng nghi thức RQ liên tục. Vận tốc truyền sóng là 2.108 m/s và tỷ lệ bit lỗi đường truyền thấp có thể bỏ qua. Đường truyền dài 10 km, tốc độ 200 Mbps và cửa sổ gửi là K = 7. Xác định Tp?"
        },
        {
          "id": "A",
          "text": "4.10-5 s"
        },
        {
          "id": "B",
          "text": "10-5 s"
        },
        {
          "id": "C",
          "text": "3.10-5 s"
        },
        {
          "id": "D",
          "text": "5.10-5 s"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl6_q24",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Một chuỗi các khung có chiều dài 1000 bits được phát dùng nghi thức RQ liên tục. Vận tốc truyền sóng là 2.108 m/s và tỷ lệ bit lỗi đường truyền thấp có thể bỏ qua. Đường truyền vệ tinh xa 50000 km, tốc độ 2Mbps và cửa sổ gửi là K = 127. Xác định Tp?"
        },
        {
          "id": "A",
          "text": "0.55s"
        },
        {
          "id": "B",
          "text": "0.45s"
        },
        {
          "id": "C",
          "text": "0.35s"
        },
        {
          "id": "D",
          "text": "0.25s"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl6_q25",
      "type": "multiple-choice",
      "text": "Một chuỗi các khung có chiều dài 1000 bits được phát dùng nghi thức RQ liên tục. Vận tốc truyền sóng là 2.108 m/s và tỷ lệ bit lỗi đường truyền thấp có thể bỏ qua. Đường truyền dài 1 km, tốc độ 1 Mbps và cửa sổ gửi là K = 2. Xác định hệ số sử dụng đường truyền U?",
      "options": [
        {
          "id": "A",
          "text": "U = 2"
        },
        {
          "id": "B",
          "text": "U = 1.75"
        },
        {
          "id": "C",
          "text": "U = 1.5"
        },
        {
          "id": "D",
          "text": "U = 1"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl6_q26",
      "type": "multiple-select",
      "text": "một nguyên tắc quan trong cần chú ý cho tất cả các RQ liên tục là? (chọn 2 đáp án đúng)",
      "options": [
        {
          "id": "A",
          "text": "Chỉ trả về ACK-frame sau khi nhận được một khung không bị sai"
        },
        {
          "id": "B",
          "text": "S phát hiện lỗi"
        },
        {
          "id": "C",
          "text": "S nhận khung đúng"
        },
        {
          "id": "D",
          "text": "S loại bỏ khung bị sai"
        }
      ],
      "image": null,
      "correctAnswers": [
        "A",
        "D"
      ]
    },
    {
      "id": "ktsl6_q27",
      "type": "multiple-choice",
      "text": "trong nghi thức Request/Response liên tục, trạng thái “waiting có nghĩa là gì?",
      "options": [
        {
          "id": "A",
          "text": "Hệ thống đang gặp lỗi"
        },
        {
          "id": "B",
          "text": "Hệ thống đang xử lý yêu cầu hiện tại"
        },
        {
          "id": "C",
          "text": "Hệ thống đang chờ yêu cầu mới từ client"
        },
        {
          "id": "D",
          "text": "Hệ thống đã hoàn thành tất cả yêu cầu"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl6_q28",
      "type": "multiple-select",
      "text": "HDLC định nghĩa những loại khung nào? (chọn 03 đáp án đúng)",
      "options": [
        {
          "id": "A",
          "text": "Khung không đánh số (U-frames)"
        },
        {
          "id": "B",
          "text": "Khung thông tin (I-frames)"
        },
        {
          "id": "C",
          "text": "Khung cờ (Flag)"
        },
        {
          "id": "D",
          "text": "Khung giám sát (S-frames)"
        }
      ],
      "image": null,
      "correctAnswers": [
        "A",
        "B",
        "D"
      ]
    },
    {
      "id": "ktsl6_q29",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Một chuỗi các khung có chiều dài 1000 bits được phát dùng nghi thức RQ liên tục. Vận tốc truyền sóng là 2.108 m/s và tỷ lệ bit lỗi đường truyền thấp có thể bỏ qua. Đường truyền dài 1 km, tốc độ 1 Mbps và cửa sổ gửi là K = 2. Xác định Tp?"
        },
        {
          "id": "A",
          "text": "4.10-6 s"
        },
        {
          "id": "B",
          "text": "2.10-6 s"
        },
        {
          "id": "C",
          "text": "3.10-6 s"
        },
        {
          "id": "D",
          "text": "5.10-6 s"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    }
  ],
  "ktsl_7": [
    {
      "id": "ktsl7_q1",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Lớp vỏ ngoài của cáp đồng trục có chức năng gì? ("
        },
        {
          "id": "A",
          "text": "Cách điện và bảo vệ cáp khỏi tác động cơ học"
        },
        {
          "id": "B",
          "text": "Cung cấp nguồn điện"
        },
        {
          "id": "C",
          "text": "Tăng cường chất lượng tín hiệu"
        },
        {
          "id": "D",
          "text": "Giúp dẫn tín hiệu"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl7_q2",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Cáp đồng trục thường được sử dụng trong mạng nào?"
        },
        {
          "id": "A",
          "text": "Mạng cáp quang"
        },
        {
          "id": "B",
          "text": "Mạng điện thoại"
        },
        {
          "id": "C",
          "text": "Mạng LAN không dây"
        },
        {
          "id": "D",
          "text": "Mạng truyền hình cáp và internet băng thông rộng"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl7_q3",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Dải tần 3.7 đến 4.2 GHz (rộng 500MHz) dành cho truyền thông nào. Nhận định nào sau đây là đúng nhất?"
        },
        {
          "id": "A",
          "text": "Từ vệ tinh xuống tới khu vực xa xôi, hẻo lánh"
        },
        {
          "id": "B",
          "text": "Từ vệ tinh hướng xuống mặt đất"
        },
        {
          "id": "C",
          "text": "Từ vệ tinh xuống đến các phương tiện di động"
        },
        {
          "id": "D",
          "text": "Từ vệ tinh hướng xuống thiết bị đầu cuối"
        }
      ],
      "image": null,
      "correctAnswer": "B"
    },
    {
      "id": "ktsl7_q4",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Dải tần 5.925 đến 6.425 GHz (rộng 500MHz) dành cho truyền thông từ?"
        },
        {
          "id": "A",
          "text": "Mặt đất lên vệ tinh"
        },
        {
          "id": "B",
          "text": "Mặt đất lên các phương tiện di động"
        },
        {
          "id": "C",
          "text": "Mặt đất lên đến các trạm giám sát vệ tinh"
        },
        {
          "id": "D",
          "text": "Mặt đất lên đến trạm viễn thông"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl7_q5",
      "type": "multiple-choice",
      "text": "Hình vẽ sau đây mô tả truyền dẫn vô tuyến theo khu vực?",
      "options": [
        {
          "id": "A",
          "text": "Đa tế bào"
        },
        {
          "id": "B",
          "text": "Đơn tế bào"
        },
        {
          "id": "C",
          "text": "Mạng di động"
        },
        {
          "id": "D",
          "text": "Đa tần số F1 đến Fn"
        }
      ],
      "image": "/images/ktsl_b7/image2.png",
      "correctAnswer": "A"
    },
    {
      "id": "ktsl7_q6",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Để giảm thiểu nhiễu và đảm bảo tín hiệu vi ba mạnh và rõ ràng, các trạm phát và thu thường phải:"
        },
        {
          "id": "A",
          "text": "Đặt tại vị trí cao và thoáng để giảm cản trở"
        },
        {
          "id": "B",
          "text": "Sử dụng nhiều dây cáp đồng trục"
        },
        {
          "id": "C",
          "text": "Sử dụng công nghệ mã hóa phức tạp"
        },
        {
          "id": "D",
          "text": "Sử dụng tần số thấp"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl7_q7",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Vận dụng kiến thức đã học về truyền dẫn số liệu. Em hãy cho biết trên vệ tinh có gắn một số thiết bị gì mà nó sẽ thu sóng điện từ trong một phổ tần số nhất định (thường là 36MHz), khuếch đại lên rồi phát lại ở dải tần số khác hướng xuống trái đất."
        },
        {
          "id": "A",
          "text": "Bộ phân kênh"
        },
        {
          "id": "B",
          "text": "Bộ phát đáp"
        },
        {
          "id": "C",
          "text": "Anten"
        },
        {
          "id": "D",
          "text": "Bộ ghép kênh"
        }
      ],
      "image": null,
      "correctAnswer": "B"
    },
    {
      "id": "ktsl7_q8",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Thiết bị đầu cuối dữ liệu (DTE) chủ yếu được sử dụng để làm gì?"
        },
        {
          "id": "A",
          "text": "Xử lý và truyền tải dữ liệu giữa người dùng và mạng"
        },
        {
          "id": "B",
          "text": "Cung cấp kết nối vật lý giữa hai thiết bị mạng"
        },
        {
          "id": "C",
          "text": "Chuyển đổi tín hiệu analog thành tín hiệu số"
        },
        {
          "id": "D",
          "text": "Cung cấp nguồn điện cho các thiết bị mạng"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl7_q9",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Thiết bị đầu cuối dữ liệu (DTE) trong một mạng thường là:"
        },
        {
          "id": "A",
          "text": "Bộ định tuyến (Router)"
        },
        {
          "id": "B",
          "text": "Máy tính cá nhân, điện thoại hoặc máy chủ"
        },
        {
          "id": "C",
          "text": "Cổng chuyển mạch (Switch)"
        },
        {
          "id": "D",
          "text": "Modem"
        }
      ],
      "image": null,
      "correctAnswer": "B"
    },
    {
      "id": "ktsl7_q10",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Thiết bị nào dưới đây không phải là một ví dụ điển hình của DTE?"
        },
        {
          "id": "A",
          "text": "Modem"
        },
        {
          "id": "B",
          "text": "Máy in"
        },
        {
          "id": "C",
          "text": "Switch"
        },
        {
          "id": "D",
          "text": "Máy tính cá nhân (PC)"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl7_q11",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "DCE (Data Circuit-Terminating Equipment) có vai trò chính nào trong hệ thống truyền thông dữ liệu?"
        },
        {
          "id": "A",
          "text": "Kết nối thiết bị đầu cuối dữ liệu (DTE) với mạng viễn thông"
        },
        {
          "id": "B",
          "text": "Chuyển đổi tín hiệu analog sang tín hiệu số"
        },
        {
          "id": "C",
          "text": "Cung cấp kết nối trực tiếp giữa các thiết bị đầu cuối dữ liệu (DTE) trong mạng nội bộ"
        },
        {
          "id": "D",
          "text": "Điều chỉnh và định tuyến lưu lượng dữ liệu giữa các mạng"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl7_q12",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "DCE và DTE giao tiếp với nhau bằng cách sử dụng:"
        },
        {
          "id": "A",
          "text": "Tín hiệu radio"
        },
        {
          "id": "B",
          "text": "Tín hiệu ánh sáng"
        },
        {
          "id": "C",
          "text": "Tín hiệu số qua một kết nối vật lý"
        },
        {
          "id": "D",
          "text": "Tín hiệu analog qua sóng vô tuyến"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl7_q13",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Trong kết nối mạng, DCE thường được sử dụng để:"
        },
        {
          "id": "A",
          "text": "Cung cấp băng thông cao cho dữ liệu"
        },
        {
          "id": "B",
          "text": "Chuyển đổi và điều chỉnh tín hiệu truyền giữa DTE và mạng viễn thông"
        },
        {
          "id": "C",
          "text": "Xử lý dữ liệu"
        },
        {
          "id": "D",
          "text": "Quản lý thiết bị đầu cuối dữ liệu (DTE)"
        }
      ],
      "image": null,
      "correctAnswer": "B"
    },
    {
      "id": "ktsl7_q14",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Thiết bị nào dưới đây là thiết bị DCE trong hệ thống truyền thông qua modem?"
        },
        {
          "id": "A",
          "text": "Máy chủ"
        },
        {
          "id": "B",
          "text": "Bộ định tuyến (Router)"
        },
        {
          "id": "C",
          "text": "Modem"
        },
        {
          "id": "D",
          "text": "Máy tính"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl7_q15",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Mạch Transmitted Data (BA) hướng từ DTE sang DCE có chức năng?"
        },
        {
          "id": "A",
          "text": "Dữ liệu được nhận bởi DCE"
        },
        {
          "id": "B",
          "text": "Dữ liệu được nhận bởi DTE"
        },
        {
          "id": "C",
          "text": "Dữ liệu được tạo bởi DCE"
        },
        {
          "id": "D",
          "text": "Dữ liệu được tạo bởi DTE"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl7_q16",
      "type": "multiple-choice",
      "text": "Đồ thị sau đây mô tả độ suy giảm của ánh sáng qua sợi quang trong miền nào?",
      "options": [
        {
          "id": "A",
          "text": "Miền ánh sáng"
        },
        {
          "id": "B",
          "text": "Miền ánh sáng bị phản xạ"
        },
        {
          "id": "C",
          "text": "Miền hồng ngoại"
        },
        {
          "id": "D",
          "text": "Miền ánh sáng bị khúc xạ"
        }
      ],
      "image": "/images/ktsl_b7/image3.png",
      "correctAnswer": "C"
    },
    {
      "id": "ktsl7_q17",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Đường truyền vi ba chủ yếu được ứng dụng trong lĩnh vực nào?"
        },
        {
          "id": "A",
          "text": "Mạng lưới điện quốc gia"
        },
        {
          "id": "B",
          "text": "Truyền tải năng lượng điện"
        },
        {
          "id": "C",
          "text": "Tất cả các đáp án trên"
        },
        {
          "id": "D",
          "text": "Truyền hình vệ tinh và viễn thông"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl7_q18",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Trong mô hình mạng, thiết bị đầu cuối dữ liệu (DTE) thường kết nối với thiết bị nào để truyền tải dữ liệu?"
        },
        {
          "id": "A",
          "text": "Bộ chuyển đổi quang (Optical Transceiver)"
        },
        {
          "id": "B",
          "text": "DCE (Data Circuit-terminating Equipment)"
        },
        {
          "id": "C",
          "text": "Hub"
        },
        {
          "id": "D",
          "text": "Firewall"
        }
      ],
      "image": null,
      "correctAnswer": "B"
    },
    {
      "id": "ktsl7_q19",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Thiết bị cuối kênh dữ liệu (DCE) là thiết bị nào trong hệ thống mạng?"
        },
        {
          "id": "A",
          "text": "Thiết bị xử lý tín hiệu số"
        },
        {
          "id": "B",
          "text": "Thiết bị định tuyến tín hiệu giữa các mạng"
        },
        {
          "id": "C",
          "text": "Thiết bị cung cấp nguồn điện cho các thiết bị mạng"
        },
        {
          "id": "D",
          "text": "Thiết bị kết nối mạng với các thiết bị đầu cuối dữ liệu"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl7_q20",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Thiết bị nào dưới đây là ví dụ điển hình của DCE?"
        },
        {
          "id": "A",
          "text": "Switch"
        },
        {
          "id": "B",
          "text": "Modem"
        },
        {
          "id": "C",
          "text": "Máy in"
        },
        {
          "id": "D",
          "text": "Máy tính cá nhân"
        }
      ],
      "image": null,
      "correctAnswer": "B"
    },
    {
      "id": "ktsl7_q21",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "DCE thường kết nối với DTE qua giao diện nào?"
        },
        {
          "id": "A",
          "text": "Giao diện USB"
        },
        {
          "id": "B",
          "text": "Giao diện LAN"
        },
        {
          "id": "C",
          "text": "Giao diện serial như RS-232"
        },
        {
          "id": "D",
          "text": "Giao diện HDMI"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl7_q22",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Mạch Data set relay (CC) trong chuẩn RS-232-C/V24 hướng DCE => DTE có chức năng gì?"
        },
        {
          "id": "A",
          "text": "DCE sẵn sàng làm việc"
        },
        {
          "id": "B",
          "text": "DTE muốn truyền dữ liệu"
        },
        {
          "id": "C",
          "text": "DTE sẵn sàng làm việc"
        },
        {
          "id": "D",
          "text": "DCE muốn truyền dữ liệu"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl7_q23",
      "type": "multiple-select",
      "text": "các tham số chất lượng cơ bản của hệ thống truyền dẫn số được đánh giá thông qua các tham số nào? (chọn 02 đáp án đúng)",
      "options": [
        {
          "id": "A",
          "text": "Dung lượng truyền dẫn"
        },
        {
          "id": "B",
          "text": "Data trên đường truyền"
        },
        {
          "id": "C",
          "text": "Tỷ lệ lỗi bit (BER)"
        },
        {
          "id": "D",
          "text": "Tần số hoạt động"
        }
      ],
      "image": null,
      "correctAnswers": [
        "A",
        "C"
      ]
    },
    {
      "id": "ktsl7_q24",
      "type": "multiple-choice",
      "text": "hình ảnh dưới đây mô tả cấu tạo của loại cáp nào?",
      "options": [
        {
          "id": "A",
          "text": "Cấu tạo cáp CAT5"
        },
        {
          "id": "B",
          "text": "Cấu tạo cáp CAT6"
        },
        {
          "id": "C",
          "text": "Cấu tạo cáp đồng trục"
        },
        {
          "id": "D",
          "text": "Cấu tạo cáp quang"
        }
      ],
      "image": "/images/ktsl_b7/image1.png",
      "correctAnswer": "C"
    },
    {
      "id": "ktsl7_q25",
      "type": "multiple-choice",
      "text": "Hình vẽ sau đây mô tả truyền dẫn vô tuyến theo khu vực?",
      "options": [
        {
          "id": "A",
          "text": "Mạng cố định"
        },
        {
          "id": "B",
          "text": "Trạm thu phát"
        },
        {
          "id": "C",
          "text": "Đa tế bào"
        },
        {
          "id": "D",
          "text": "Một tế bào"
        }
      ],
      "image": "/images/ktsl_b7/image4.png",
      "correctAnswer": "D"
    },
    {
      "id": "ktsl7_q26",
      "type": "multiple-choice",
      "text": "Tín hiệu trong cáp đồng trục di chuyển trên phần nào của cáp?",
      "options": [
        {
          "id": "A",
          "text": "Lớp màn chắn (shield)"
        },
        {
          "id": "B",
          "text": "Lớp cách điện"
        },
        {
          "id": "C",
          "text": "Vỏ bọc ngoài"
        },
        {
          "id": "D",
          "text": "Lõi dẫn tín hiệu trung tâm"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl7_q27",
      "type": "multiple-choice",
      "text": "Mạch Carrier Detect (CF) trong chuẩn RS-232-C/V24 hướng từ DCE sáng DTE có chức năng gì?",
      "options": [
        {
          "id": "A",
          "text": "Khẳng định để DCE chọn tốc độ dữ liệu"
        },
        {
          "id": "B",
          "text": "Chỉ ra rằng DTE đang nhận một carrier signal."
        },
        {
          "id": "C",
          "text": "Chỉ ra rằng DCE đang nhận một carrier signal"
        },
        {
          "id": "D",
          "text": "Khẳng định để DTE chọn tốc độ dữ liệu"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl7_q28",
      "type": "multiple-choice",
      "text": "Các trạm phát tín hiệu vi ba thường được đặt ở đâu để đảm bảo tín hiệu được truyền tốt nhất? (chọn 01 đáp án đúng trong các câu trả lời bên dưới)",
      "options": [
        {
          "id": "A",
          "text": "Trong lòng đất"
        },
        {
          "id": "B",
          "text": "ở dưới mặt đất"
        },
        {
          "id": "C",
          "text": "trên đỉnh các tòa nhà cao hoặc các cột thu sóng"
        },
        {
          "id": "D",
          "text": "trong các hầm chứa kín"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl7_q29",
      "type": "multiple-select",
      "text": "Dải thông của đường cáp xoắn đôi phụ thuộc vào các yếu tố nào? (chọn 2 đáp án đúng)",
      "options": [
        {
          "id": "A",
          "text": "đường kính của sợi dây"
        },
        {
          "id": "B",
          "text": "chiều dài sợi dây"
        },
        {
          "id": "C",
          "text": "vật liệu sợi dây"
        },
        {
          "id": "D",
          "text": "tính chất sợi dây"
        }
      ],
      "image": null,
      "correctAnswers": [
        "A",
        "B"
      ]
    }
  ],
  "ktsl_8": [
    {
      "id": "ktsl8_q1",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Mã nhị phân NRZ (Non-Return-to-Zero) là gì?"
        },
        {
          "id": "A",
          "text": "Là dạng mã mà mức tín hiệu luôn ở mức không đổi"
        },
        {
          "id": "B",
          "text": "Là dạng mã có sự thay đổi mức tín hiệu tại mỗi bit"
        },
        {
          "id": "C",
          "text": "Là dạng mã có sự thay đổi mức tín hiệu tại giữa mỗi bit"
        },
        {
          "id": "D",
          "text": "Là dạng mã mà mức tín hiệu không thay đổi trong suốt thời gian của bit"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl8_q2",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Đặc điểm nào sau đây đúng về mã NRZ-L (Non-Return-to-Zero-Level)?"
        },
        {
          "id": "A",
          "text": "Mã NRZ-L sử dụng mức tín hiệu cao cho bit 1 và mức tín hiệu thấp cho bit 0"
        },
        {
          "id": "B",
          "text": "Mã NRZ-L có sự thay đổi mức tín hiệu giữa các bit"
        },
        {
          "id": "C",
          "text": "Mã NRZ-L sử dụng mức tín hiệu thấp cho bit 1 và mức tín hiệu cao cho bit 0"
        },
        {
          "id": "D",
          "text": "Mã NRZ-L có mức tín hiệu không thay đổi giữa các bit"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl8_q3",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Đáp án nào dưới đây là nhược điểm của mã NRZ là:"
        },
        {
          "id": "A",
          "text": "Khó đồng bộ khi có chuỗi dài các bit giống nhau (1 hoặc 0)"
        },
        {
          "id": "B",
          "text": "Không hỗ trợ mã hóa bit 0 và 1"
        },
        {
          "id": "C",
          "text": "Dễ dàng phát hiện lỗi đồng bộ khi có sự thay đổi mức tín hiệu"
        },
        {
          "id": "D",
          "text": "Dễ dàng phát hiện lỗi đồng bộ khi không có sự thay đổi mức tín hiệu"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl8_q4",
      "type": "multiple-choice",
      "text": "Bảng sau đây mô tả quy luật biến đổi của mã nào?",
      "options": [
        {
          "id": "A",
          "text": "Mã HDB3"
        },
        {
          "id": "B",
          "text": "Mã NRZ"
        },
        {
          "id": "C",
          "text": "Mã RZ"
        },
        {
          "id": "D",
          "text": "Mã tam phân chọn cặp"
        }
      ],
      "image": "/images/ktsl_b8/image1.png",
      "correctAnswer": "D"
    },
    {
      "id": "ktsl8_q5",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Mã 6B4T biến đổi 6 số nhị phân thành bao nhiêu số tam phân?"
        },
        {
          "id": "A",
          "text": "4"
        },
        {
          "id": "B",
          "text": "5"
        },
        {
          "id": "C",
          "text": "6"
        },
        {
          "id": "D",
          "text": "3"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl8_q6",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Mã HDB3 là gì?"
        },
        {
          "id": "A",
          "text": "Là mã nhị phân có chuỗi dài các bit 0 thay đổi thành các chuỗi dài bit 1"
        },
        {
          "id": "B",
          "text": "Là mã nhị phân không thay đổi mức tín hiệu giữa các bit"
        },
        {
          "id": "C",
          "text": "Là mã nhị phân có ba bit 1 liên tiếp thay đổi mức tín hiệu"
        },
        {
          "id": "D",
          "text": "Là mã nhị phân có ba bit 0 liên tiếp được thay thế bằng một chuỗi có sự thay đổi mức tín hiệu"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl8_q7",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Trong mã HDB3, ba bit 0 liên tiếp sẽ được thay thế bằng chuỗi nào?"
        },
        {
          "id": "A",
          "text": "1100 hoặc 1110"
        },
        {
          "id": "B",
          "text": "0000"
        },
        {
          "id": "C",
          "text": "1000 hoặc 1001"
        },
        {
          "id": "D",
          "text": "0001"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl8_q8",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Trong phương pháp điều chế biên độ ASK, nếu bit 1 được mã hóa, thì biên độ của tín hiệu mang sẽ:"
        },
        {
          "id": "A",
          "text": "Bằng không"
        },
        {
          "id": "B",
          "text": "Tăng lên một giá trị nhất định"
        },
        {
          "id": "C",
          "text": "Vẫn giữ nguyên biên độ"
        },
        {
          "id": "D",
          "text": "Giảm xuống một giá trị nhỏ"
        }
      ],
      "image": null,
      "correctAnswer": "B"
    },
    {
      "id": "ktsl8_q9",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Trong quá trình giải điều chế ASK, máy thu sẽ:"
        },
        {
          "id": "A",
          "text": "Thay đổi biên độ của tín hiệu mang theo tín hiệu thông tin"
        },
        {
          "id": "B",
          "text": "Dùng pha của tín hiệu mang để giải mã tín hiệu"
        },
        {
          "id": "C",
          "text": "Sử dụng tần số của tín hiệu mang để tách tín hiệu thông tin"
        },
        {
          "id": "D",
          "text": "Đo biên độ của tín hiệu thu được và so sánh với ngưỡng để xác định giá trị của bit"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl8_q10",
      "type": "multiple-choice",
      "text": "HÌnh vẽ dưới đây mô tả phương pháp điều chế nào?",
      "options": [
        {
          "id": "A",
          "text": "Phương pháp điều chế FSK"
        },
        {
          "id": "B",
          "text": "Phương pháp điều chế ASK"
        },
        {
          "id": "C",
          "text": "Phương pháp điều chế PSK"
        },
        {
          "id": "D",
          "text": "Phương pháp điều chế QAM"
        }
      ],
      "image": "/images/ktsl_b8/image2.png",
      "correctAnswer": "B"
    },
    {
      "id": "ktsl8_q11",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Khi thực hiện giải điều chế FSK, máy thu sẽ:"
        },
        {
          "id": "A",
          "text": "So sánh tần số của tín hiệu thu được với ngưỡng để xác định giá trị của bit"
        },
        {
          "id": "B",
          "text": "Dùng pha của tín hiệu mang để giải mã tín hiệu"
        },
        {
          "id": "C",
          "text": "Đo biên độ của tín hiệu thu được và so sánh với ngưỡng để xác định giá trị của bit"
        },
        {
          "id": "D",
          "text": "Thay đổi tần số của tín hiệu mang để tái tạo dữ liệu ban đầu"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl8_q12",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Điều chế PSK (Phase Shift Keying) là gì?"
        },
        {
          "id": "A",
          "text": "Là phương pháp thay đổi độ dài xung của tín hiệu mang"
        },
        {
          "id": "B",
          "text": "Là phương pháp thay đổi tần số của tín hiệu mang để biểu diễn dữ liệu số"
        },
        {
          "id": "C",
          "text": "Là phương pháp thay đổi biên độ của tín hiệu mang để biểu diễn dữ liệu số"
        },
        {
          "id": "D",
          "text": "Là phương pháp thay đổi pha của tín hiệu mang để biểu diễn dữ liệu số"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl8_q13",
      "type": "multiple-choice",
      "text": "Hình vẽ dưới đây mô tả phương pháp giải điều chế nào ?",
      "options": [
        {
          "id": "A",
          "text": "Phương pháp giải điều chế FSK"
        },
        {
          "id": "B",
          "text": "Phương pháp giải điều chế 16-QAM"
        },
        {
          "id": "C",
          "text": "Phương pháp giải điều chế 8-ASK"
        },
        {
          "id": "D",
          "text": "Phương pháp giải điều chế PSK"
        }
      ],
      "image": "/images/ktsl_b8/image3.png",
      "correctAnswer": "A"
    },
    {
      "id": "ktsl8_q14",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Trong điều chế QAM, tín hiệu được điều chế bằng cách thay đổi:"
        },
        {
          "id": "A",
          "text": "Cả biên độ và pha của tín hiệu mang"
        },
        {
          "id": "B",
          "text": "Biên độ của tín hiệu mang và giữ pha cố định"
        },
        {
          "id": "C",
          "text": "Tần số của tín hiệu mang và giữ pha cố định"
        },
        {
          "id": "D",
          "text": "Pha của tín hiệu mang và giữ biên độ cố định"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl8_q15",
      "type": "multiple-choice",
      "text": "Hình vẽ sau đây mô tả phương pháp điều chế và giải điều chế nào?",
      "options": [
        {
          "id": "A",
          "text": "Phương pháp điều chế và giải điều chế PSK vi phân"
        },
        {
          "id": "B",
          "text": "Phương pháp điều chế và giải điều chế ASK vi phân"
        },
        {
          "id": "C",
          "text": "Phương pháp điều chế và giải điều chế FSK vi phân"
        },
        {
          "id": "D",
          "text": "Phương pháp điều chế và giải điều chế QPSK vi phân"
        }
      ],
      "image": "/images/ktsl_b8/image4.png",
      "correctAnswer": "D"
    },
    {
      "id": "ktsl8_q16",
      "type": "multiple-select",
      "text": "Lý do tại sao tín hiệu nhị phân đơn cự không thích hợp để truyền qua biến áp? (chọn 2 đáp án đúng)",
      "options": [
        {
          "id": "A",
          "text": "Nó có chưa thành phần tần số mức cao"
        },
        {
          "id": "B",
          "text": "Nó có chứa thành phần 1 chiều"
        },
        {
          "id": "C",
          "text": "Do tính chất của biến áp"
        },
        {
          "id": "D",
          "text": "Nó có chưa thành phần xoay chiều"
        }
      ],
      "image": null,
      "correctAnswers": [
        "A",
        "B"
      ]
    },
    {
      "id": "ktsl8_q17",
      "type": "multiple-choice",
      "text": "một trong các ưu điểm của mã HDB3 so với mã NRZ là gì?",
      "options": [
        {
          "id": "A",
          "text": "Mã HDB3 dễ bị mất đồng bộ hơn mã NRZ"
        },
        {
          "id": "B",
          "text": "Mã HDB3 không có sự thay đổi mức tín hiệu, giúp dễ dàng nhận dạng bit 0 và bit 1"
        },
        {
          "id": "C",
          "text": "Mã HDB3 có thể duy trì đồng bộ hóa tín hiệu khi có chuỗi dài các bit 0"
        },
        {
          "id": "D",
          "text": "Mã HDB3 có hiệu suất truyền dữ liệu cao hơn mã NRZ"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl8_q18",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Điều chế FSK (Frequency Shift Keying) là gì?"
        },
        {
          "id": "A",
          "text": "Là phương pháp thay đổi độ dài xung của tín hiệu mang"
        },
        {
          "id": "B",
          "text": "Là phương pháp thay đổi pha của tín hiệu mang để biểu diễn dữ liệu số"
        },
        {
          "id": "C",
          "text": "Là phương pháp thay đổi biên độ của tín hiệu mang để biểu diễn dữ liệu số"
        },
        {
          "id": "D",
          "text": "Là phương pháp thay đổi tần số của tín hiệu mang để biểu diễn dữ liệu số"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl8_q19",
      "type": "multiple-choice",
      "text": "trong điều chế PSK, mỗi bit 1 và bit 0 được biểu diễn bằng:",
      "options": [
        {
          "id": "A",
          "text": "Một mức biên độ và một pha khác nhau"
        },
        {
          "id": "B",
          "text": "Hai mức biên độ khác nhau của tín hiệu mang"
        },
        {
          "id": "C",
          "text": "Hai tần số khác nhau của tín hiệu mang"
        },
        {
          "id": "D",
          "text": "Hai pha khác nhau của tín hiệu mang"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl8_q20",
      "type": "multiple-choice",
      "text": "Điều chế PSK có thể được mở rộng thành nhiều mức như:",
      "options": [
        {
          "id": "A",
          "text": "BPSK, 16-QAM, 8-FSK"
        },
        {
          "id": "B",
          "text": "BPSK, 8-ASK,FSK"
        },
        {
          "id": "C",
          "text": "16-PSK, QPSK, ASK"
        },
        {
          "id": "D",
          "text": "BPSK (Binary PSK), QPSK (Quadrature PSK), 8-PSK"
        }
      ],
      "image": null,
      "correctAnswer": "D"
    },
    {
      "id": "ktsl8_q21",
      "type": "multiple-choice",
      "text": "Phương pháp điều chế QPSK vi phân (DQPSK) là gì?",
      "options": [
        {
          "id": "A",
          "text": "Là phương pháp thay đổi biên độ của tín hiệu mang để biểu diễn dữ liệu số"
        },
        {
          "id": "B",
          "text": "Là phương pháp thay đổi pha tín hiệu mang giữa các tín hiệu liên tiếp, thay vì dựa vào pha tuyệt đối"
        },
        {
          "id": "C",
          "text": "Là phowng pháp thay đổi pha của tín hiệu mang theo sự thay đổi các bit 0 và bit 1"
        },
        {
          "id": "D",
          "text": "Là phương pháp thay đổi tần số của tín hiệu mang để biểu diễn dữ liệu số"
        }
      ],
      "image": null,
      "correctAnswer": "B"
    },
    {
      "id": "ktsl8_q22",
      "type": "multiple-choice",
      "text": "bảng dưới đây mô tả quy luật biến đổi của mã nào?",
      "options": [
        {
          "id": "A",
          "text": "Mã MS43"
        },
        {
          "id": "B",
          "text": "Mã HDB3"
        },
        {
          "id": "C",
          "text": "Mã tam phân chọn cặp"
        },
        {
          "id": "D",
          "text": "Mã NRZ"
        }
      ],
      "image": "/images/ktsl_b8/image5.png",
      "correctAnswer": "A"
    },
    {
      "id": "ktsl8_q23",
      "type": "multiple-choice",
      "text": "",
      "options": [
        {
          "id": "A",
          "text": "Trong mã nhị phân RZ, đặc điểm nào đúng khi mã hóa bit 0 ?A. Mức tín hiệu cao trong nửa thời gian của bit, sau đó chuyển về mức thấp"
        },
        {
          "id": "B",
          "text": "mức tín hiệu cao tỏng suốt thời gian của bit 0"
        },
        {
          "id": "C",
          "text": "mức tín hiệu thấp trong suốt thời gian của bit 0"
        },
        {
          "id": "D",
          "text": "mức tín hiệu không thay đổi trong suốt thời gian của bit"
        }
      ],
      "image": null,
      "correctAnswer": "C"
    },
    {
      "id": "ktsl8_q24",
      "type": "multiple-choice",
      "text": "Bảng dưới đây là quy luật biến đổi của mã nào?",
      "options": [
        {
          "id": "A",
          "text": "Mã HDB3"
        },
        {
          "id": "B",
          "text": "Mã RZ"
        },
        {
          "id": "C",
          "text": "Mã tam phân chọn cặp"
        },
        {
          "id": "D",
          "text": "4B3T"
        }
      ],
      "image": "/images/ktsl_b8/image6.png",
      "correctAnswer": "D"
    },
    {
      "id": "ktsl8_q25",
      "type": "multiple-choice",
      "text": "trong điều chế ASK, tín hiệu mang có thể được biểu diễn dưới dạng:",
      "options": [
        {
          "id": "A",
          "text": "Biên độ thay đổi giữa các bit 0 và bit 1"
        },
        {
          "id": "B",
          "text": "Tần số thay đổi giữa các bit"
        },
        {
          "id": "C",
          "text": "Pha thay đổi giữa các bit 0 và bit 1"
        },
        {
          "id": "D",
          "text": "Độ dài của mỗi bit thay đổi"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl8_q26",
      "type": "multiple-choice",
      "text": "Trong điều chế QAM, nếu sử dụng QAM-16, số lượng mwucs tín hiệu có thể có là:",
      "options": [
        {
          "id": "A",
          "text": "8 mức tín hiệu"
        },
        {
          "id": "B",
          "text": "16 mức tín hiệu"
        },
        {
          "id": "C",
          "text": "32 mức tín hiệu"
        },
        {
          "id": "D",
          "text": "4 mức tín hiệu"
        }
      ],
      "image": null,
      "correctAnswer": "B"
    },
    {
      "id": "ktsl8_q27",
      "type": "multiple-choice",
      "text": "trong mã nhị phân RZ( Return – to – zero), sau mỗi bit bằng 1, tín hiệu sẽ:",
      "options": [
        {
          "id": "A",
          "text": "ở mức cao trong suốt thời gina của bit"
        },
        {
          "id": "B",
          "text": "ở mức cao trong nửa thời gian của bit và quay lại mức thấp trong nửa còn lại"
        },
        {
          "id": "C",
          "text": "ở mức thấp trong suốt thười gian của bit"
        },
        {
          "id": "D",
          "text": "ở mức cao trong suốt bit và không quay lại mức thấp"
        }
      ],
      "image": null,
      "correctAnswer": "B"
    },
    {
      "id": "ktsl8_q28",
      "type": "multiple-choice",
      "text": "Khi sử dụng mã HDB3, nếu một chuỗi gồm 4 bit 0 liên tiếp, chuỗi này sẽ được mã hóa như thế nào?",
      "options": [
        {
          "id": "A",
          "text": "0000 được thay thế bằng 1000 hoặc 1001 tùy vào trạng thái mức tín hiệu trước đo"
        },
        {
          "id": "B",
          "text": "0000 sẽ không được mã hóa"
        },
        {
          "id": "C",
          "text": "0000 được thay thế bằng 1111"
        },
        {
          "id": "D",
          "text": "0000 không thay đổi và giữ nguyên"
        }
      ],
      "image": null,
      "correctAnswer": "A"
    },
    {
      "id": "ktsl8_q29",
      "type": "multiple-select",
      "text": "Lý do tại sao một tín hiệu nhị phân đơn cực phải biến thành dạng khác trước lúc truyền qua kênh thông tin? (CHỌN 03 ĐÁP ÁN ĐÚNG)",
      "options": [
        {
          "id": "A",
          "text": "Khi truyền một dãy “0” liên tiếp thì không có điểm chuyển tiếp tín hiẹu"
        },
        {
          "id": "B",
          "text": "Nó có chứa thành phần một chiều"
        },
        {
          "id": "C",
          "text": "Nó có các thành phần tần số mức thấp"
        },
        {
          "id": "D",
          "text": "Nó có các thành phần tần số thấp mức cao"
        }
      ],
      "image": null,
      "correctAnswers": [
        "A",
        "B",
        "D"
      ]
    },
    {
      "id": "ktsl8_q30",
      "type": "multiple-choice",
      "text": "hình vẽ dưới đây mô tả phương pháp điều chế nào?",
      "options": [
        {
          "id": "A",
          "text": "Phương pháp điều chế 16-QAM"
        },
        {
          "id": "B",
          "text": "Phương pháp điêuc chế FSK"
        },
        {
          "id": "C",
          "text": "Phương pháp điều chế QAM"
        },
        {
          "id": "D",
          "text": "Phương pháp điều chế PSK"
        }
      ],
      "image": "/images/ktsl_b8/image7.png",
      "correctAnswer": "B"
    }
  ]
};

export default LESSONS_DATA;
