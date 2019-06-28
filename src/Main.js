import React from "react";
import Header from "./component/general/Header";
import Direct from "./component/Direct/Direct";
import changeURL from "../src/function/changeURL";
import "../src/font/inter.css";
import Footer from "./component/general/Footer";
import HomeContainer from "./component/Home/HomeContainer";
import carousel_1 from "../src/images/banner-element.svg";
import carousel_2 from "../src/images/event-3.svg";
import carousel_3 from "../src/images/kinder-4.jpg";
import carousel_4 from "../src/images/event-2.svg";
import school_banner_1 from "../src/images/school-banner-1.jpg";
import school_banner_2 from "../src/images/school-banner-2.png";
import school_banner_3 from "../src/images/school-banner-3.jpg";
import school_banner_4 from "../src/images/school-banner-4.jpg";
import school_banner_5 from "../src/images/school-banner-5.jpg";
import school_banner_6 from "../src/images/school-banner-6.jpg";
import school_banner_7 from "../src/images/school-banner-7.jpg";
import school_banner_8 from "../src/images/school-banner-8.jpg";
import school_logo_1 from "../src/images/school-logo-1.svg";
import school_logo_2 from "../src/images/school-logo-2.png";
import school_logo_3 from "../src/images/school-logo-3.svg";
import school_logo_4 from "../src/images/school-logo-4.png";
import school_logo_5 from "../src/images/school-logo-5.svg";
import school_logo_6 from "../src/images/school-logo-6.png";
import school_logo_7 from "../src/images/school-logo-7.png";
import school_logo_8 from "../src/images/school-logo-8.png";
import { BrowserRouter, Route } from "react-router-dom";
class Main extends React.Component {
  constructor(props) {
    super(props);
    var data = [
      {
        schoolName: "TRƯỜNG MẦM NON TTC",
        schoolAddress:
          "590, đường Cách Mạng Tháng Tám, phường 11, quận 3, TP.HCM",
        schoolLink: "http://www.sgu.edu.vn",
        schoolPhone: "028 435 42356",
        schoolKind: "Từ 06 tháng đến 05 tuổi",
        schoolFee: "4.300.000 vnd/năm",
        schoolLikes: 10,
        schoolComment: 20,
        schoolType: "internation",
        schoolBanner: school_banner_1,
        schoolLogo: school_logo_1,
        schoolIntro:
          "Công ty Cổ phần Giáo dục Thành Thành Công (TTC EDU) hiện có 08 trường mầm non tại TP.HCM, Bình Dương, Đồng Nai, Bến Tre. Trong đó, 5 trường thuộc hệ chất lượng cao và 3 trường thuộc hệ quốc tế. Xuất phát từ tâm huyết xây dựng môi trường giáo dục “Yêu thương – Tôn trọng – Trách nhiệm”, mong muốn sẻ chia những kiến thức bổ ích trong việc chăm sóc và dạy dỗ trẻ được phát triển về cả “Tâm lực – Thể lực – Trí lực” thông qua sự gắn kết hiệu quả giữa gia đình – nhà trường, Hệ thống Trường Mầm non TTC (TTC Preschool) định hướng phát triển mạnh mẽ dựa trên 4 trụ cột chính: cơ sở vật chất, chương trình học - chăm dưỡng, đội ngũ và kết nối, nhằm hiện thực hóa mục tiêu. Mỗi cơ sở vừa là trường học, vừa là trung tâm tư vấn phương pháp giáo dục và phát triển trẻ được ưu tiên hàng đầu",
        schoolImages: {
          facilities: [
            carousel_1,
            carousel_2,
            carousel_3,
            carousel_4,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_1
          ],
          library: [
            carousel_1,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_2,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_1,
            carousel_2
          ],
          canteen: [
            carousel_3,
            carousel_4,
            carousel_1,
            carousel_2,
            carousel_4,
            carousel_1,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_4
          ],
          dormitory: [
            carousel_2,
            carousel_1,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_2,
            carousel_4,
            carousel_2,
            carousel_1
          ]
        },
        schoolComments: [
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          },
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          }
        ]
      },
      {
        schoolName: "TRƯỜNG MẦM NON LEMON",
        schoolAddress:
          "590, đường Cách Mạng Tháng Tám, phường 11, quận 3, TP.HCM",
        schoolLink: "http://www.sgu.edu.vn",
        schoolPhone: "028 435 42356",
        schoolKind: "Từ 06 tháng đến 05 tuổi",
        schoolFee: "4.300.000 vnd/năm",
        schoolLikes: 10,
        schoolComment: 20,
        schoolType: "",
        schoolLogo: school_logo_2,
        schoolBanner: school_banner_2,
        schoolIntro: "Công ty Cổ phần Giáo dục Thành Thành Công (TTC EDU)",
        schoolImages: {
          facilities: [
            carousel_1,
            carousel_2,
            carousel_3,
            carousel_4,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_1
          ],
          library: [
            carousel_1,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_2,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_1,
            carousel_2
          ],
          canteen: [
            carousel_3,
            carousel_4,
            carousel_1,
            carousel_2,
            carousel_4,
            carousel_1,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_4
          ],
          dormitory: [
            carousel_2,
            carousel_1,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_2,
            carousel_4,
            carousel_2,
            carousel_1
          ]
        },
        schoolComments: [
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          },
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          }
        ]
      },
      {
        schoolName: "TRƯỜNG MẦM NON Saigon Acedemy",
        schoolAddress:
          "590, đường Cách Mạng Tháng Tám, phường 11, quận 3, TP.HCM",
        schoolLink: "http://www.sgu.edu.vn",
        schoolPhone: "028 435 42356",
        schoolKind: "Từ 06 tháng đến 05 tuổi",
        schoolFee: "4.300.000 vnd/năm",
        schoolLikes: 10,
        schoolComment: 20,
        schoolType: "",
        schoolBanner: school_banner_3,
        schoolLogo: school_logo_3,
        schoolIntro: "Công ty Cổ phần Giáo dục Thành Thành Công (TTC EDU)",
        schoolImages: {
          facilities: [
            carousel_1,
            carousel_2,
            carousel_3,
            carousel_4,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_1
          ],
          library: [
            carousel_1,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_2,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_1,
            carousel_2
          ],
          canteen: [
            carousel_3,
            carousel_4,
            carousel_1,
            carousel_2,
            carousel_4,
            carousel_1,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_4
          ],
          dormitory: [
            carousel_2,
            carousel_1,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_2,
            carousel_4,
            carousel_2,
            carousel_1
          ]
        },
        schoolComments: [
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          },
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          }
        ]
      },
      {
        schoolName: "TRƯỜNG MẦM NON PATHWAY",
        schoolAddress:
          "590, đường Cách Mạng Tháng Tám, phường 11, quận 3, TP.HCM",
        schoolLink: "http://www.sgu.edu.vn",
        schoolPhone: "028 435 42356",
        schoolKind: "Từ 06 tháng đến 05 tuổi",
        schoolFee: "4.300.000 vnd/năm",
        schoolLikes: 10,
        schoolComment: 20,
        schoolType: "internation",
        schoolBanner: school_banner_4,
        schoolLogo: school_logo_4,
        schoolIntro: "Công ty Cổ phần Giáo dục Thành Thành Công (TTC EDU)",
        schoolImages: {
          facilities: [
            carousel_1,
            carousel_2,
            carousel_3,
            carousel_4,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_1
          ],
          library: [
            carousel_1,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_2,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_1,
            carousel_2
          ],
          canteen: [
            carousel_3,
            carousel_4,
            carousel_1,
            carousel_2,
            carousel_4,
            carousel_1,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_4
          ],
          dormitory: [
            carousel_2,
            carousel_1,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_2,
            carousel_4,
            carousel_2,
            carousel_1
          ]
        },
        schoolComments: [
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          },
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          }
        ]
      },
      {
        schoolName: "TRƯỜNG MẦM NON AUSTRALIA",
        schoolAddress:
          "590, đường Cách Mạng Tháng Tám, phường 11, quận 3, TP.HCM",
        schoolLink: "http://www.sgu.edu.vn",
        schoolPhone: "028 435 42356",
        schoolKind: "Từ 06 tháng đến 05 tuổi",
        schoolFee: "4.300.000 vnd/năm",
        schoolLikes: 10,
        schoolComment: 20,
        schoolType: "internation",
        schoolBanner: school_banner_5,
        schoolLogo: school_logo_5,
        schoolIntro: "Công ty Cổ phần Giáo dục Thành Thành Công (TTC EDU)",
        schoolImages: {
          facilities: [
            carousel_1,
            carousel_2,
            carousel_3,
            carousel_4,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_1
          ],
          library: [
            carousel_1,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_2,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_1,
            carousel_2
          ],
          canteen: [
            carousel_3,
            carousel_4,
            carousel_1,
            carousel_2,
            carousel_4,
            carousel_1,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_4
          ],
          dormitory: [
            carousel_2,
            carousel_1,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_2,
            carousel_4,
            carousel_2,
            carousel_1
          ]
        },
        schoolComments: [
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          },
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          }
        ]
      },
      {
        schoolName: "TRƯỜNG MẦM NON ALOHA",
        schoolAddress:
          "590, đường Cách Mạng Tháng Tám, phường 11, quận 3, TP.HCM",
        schoolLink: "http://www.sgu.edu.vn",
        schoolPhone: "028 435 42356",
        schoolKind: "Từ 06 tháng đến 05 tuổi",
        schoolFee: "4.300.000 vnd/năm",
        schoolLikes: 10,
        schoolComment: 20,
        schoolType: "internation",
        schoolBanner: school_banner_6,
        schoolLogo: school_logo_6,
        schoolIntro: "Công ty Cổ phần Giáo dục Thành Thành Công (TTC EDU)",
        schoolImages: {
          facilities: [
            carousel_1,
            carousel_2,
            carousel_3,
            carousel_4,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_1
          ],
          library: [
            carousel_1,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_2,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_1,
            carousel_2
          ],
          canteen: [
            carousel_3,
            carousel_4,
            carousel_1,
            carousel_2,
            carousel_4,
            carousel_1,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_4
          ],
          dormitory: [
            carousel_2,
            carousel_1,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_2,
            carousel_4,
            carousel_2,
            carousel_1
          ]
        },
        schoolComments: [
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          },
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          }
        ]
      },
      {
        schoolName: "TRƯỜNG MẦM NON SUBASA",
        schoolAddress:
          "590, đường Cách Mạng Tháng Tám, phường 11, quận 3, TP.HCM",
        schoolLink: "http://www.sgu.edu.vn",
        schoolPhone: "028 435 42356",
        schoolKind: "Từ 06 tháng đến 05 tuổi",
        schoolFee: "4.300.000 vnd/năm",
        schoolLikes: 10,
        schoolComment: 20,
        schoolType: "",
        schoolBanner: school_banner_7,
        schoolLogo: school_logo_7,
        schoolIntro: "Công ty Cổ phần Giáo dục Thành Thành Công (TTC EDU)",
        schoolImages: {
          facilities: [
            carousel_1,
            carousel_2,
            carousel_3,
            carousel_4,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_1
          ],
          library: [
            carousel_1,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_2,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_1,
            carousel_2
          ],
          canteen: [
            carousel_3,
            carousel_4,
            carousel_1,
            carousel_2,
            carousel_4,
            carousel_1,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_4
          ],
          dormitory: [
            carousel_2,
            carousel_1,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_2,
            carousel_4,
            carousel_2,
            carousel_1
          ]
        },
        schoolComments: [
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          },
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          }
        ]
      },
      {
        schoolName: "TRƯỜNG MẦM NON ANACONDA",
        schoolAddress:
          "590, đường Cách Mạng Tháng Tám, phường 11, quận 3, TP.HCM",
        schoolLink: "http://www.sgu.edu.vn",
        schoolPhone: "028 435 42356",
        schoolKind: "Từ 06 tháng đến 05 tuổi",
        schoolFee: "4.300.000 vnd/năm",
        schoolLikes: 10,
        schoolComment: 20,
        schoolType: "",
        schoolBanner: school_banner_8,
        schoolLogo: school_logo_8,
        schoolIntro: "Công ty Cổ phần Giáo dục Thành Thành Công (TTC EDU)",
        schoolImages: {
          facilities: [
            carousel_1,
            carousel_2,
            carousel_3,
            carousel_4,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_1
          ],
          library: [
            carousel_1,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_2,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_1,
            carousel_2
          ],
          canteen: [
            carousel_3,
            carousel_4,
            carousel_1,
            carousel_2,
            carousel_4,
            carousel_1,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_4
          ],
          dormitory: [
            carousel_2,
            carousel_1,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_2,
            carousel_4,
            carousel_2,
            carousel_1
          ]
        },
        schoolComments: [
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          },
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          }
        ]
      },
      {
        schoolName: "TRƯỜNG MẦM NON YAMA",
        schoolAddress:
          "590, đường Cách Mạng Tháng Tám, phường 11, quận 3, TP.HCM",
        schoolLink: "http://www.sgu.edu.vn",
        schoolPhone: "028 435 42356",
        schoolKind: "Từ 06 tháng đến 05 tuổi",
        schoolFee: "4.300.000 vnd/năm",
        schoolLikes: 10,
        schoolComment: 20,
        schoolType: "internation",
        schoolBanner: school_banner_4,
        schoolLogo: school_logo_4,
        schoolIntro: "Công ty Cổ phần Giáo dục Thành Thành Công (TTC EDU)",
        schoolImages: {
          facilities: [
            carousel_1,
            carousel_2,
            carousel_3,
            carousel_4,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_1
          ],
          library: [
            carousel_1,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_2,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_1,
            carousel_2
          ],
          canteen: [
            carousel_3,
            carousel_4,
            carousel_1,
            carousel_2,
            carousel_4,
            carousel_1,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_4
          ],
          dormitory: [
            carousel_2,
            carousel_1,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_2,
            carousel_4,
            carousel_2,
            carousel_1
          ]
        },
        schoolComments: [
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          },
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          }
        ]
      },
      {
        schoolName: "TRƯỜNG MẦM NON MEME",
        schoolAddress:
          "590, đường Cách Mạng Tháng Tám, phường 11, quận 3, TP.HCM",
        schoolLink: "http://www.sgu.edu.vn",
        schoolPhone: "028 435 42356",
        schoolKind: "Từ 06 tháng đến 05 tuổi",
        schoolFee: "4.300.000 vnd/năm",
        schoolLikes: 10,
        schoolComment: 20,
        schoolType: "",
        schoolBanner: school_banner_4,
        schoolLogo: school_logo_4,
        schoolIntro: "Công ty Cổ phần Giáo dục Thành Thành Công (TTC EDU)",
        schoolImages: {
          facilities: [
            carousel_1,
            carousel_2,
            carousel_3,
            carousel_4,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_1
          ],
          library: [
            carousel_1,
            carousel_4,
            carousel_3,
            carousel_2,
            carousel_2,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_1,
            carousel_2
          ],
          canteen: [
            carousel_3,
            carousel_4,
            carousel_1,
            carousel_2,
            carousel_4,
            carousel_1,
            carousel_3,
            carousel_2,
            carousel_1,
            carousel_4
          ],
          dormitory: [
            carousel_2,
            carousel_1,
            carousel_3,
            carousel_1,
            carousel_4,
            carousel_2,
            carousel_4,
            carousel_2,
            carousel_1
          ]
        },
        schoolComments: [
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Test Bình luận. TTC là một môi trường tốt. Các thiết bị cho sinh viên hiện đại. Thư viện chuẩn hóa quốc tế."
          },
          {
            commentAvt: "../../images/school-.svg",
            commentName: "Nguyễn Thành Công",
            commentTime: "16:00",
            commentDate: "23-04-2019",
            commentContent:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print"
          }
        ]
      }
    ];
    this.state = {
      schoolData: data
    };
  }
  render() {
    var routerSchools = this.state.schoolData.map((data, index) => {
      return (
        <Route
          key={index}
          exact
          path={"/" + changeURL(data.schoolName)}
          render={() => (
            <Direct
              schoolLogo={data.schoolLogo}
              schoolName={data.schoolName}
              schoolAddress={data.schoolAddress}
              schoolLink={data.schoolLink}
              schoolPhone={data.schoolPhone}
              schoolKind={data.schoolKind}
              schoolFee={data.schoolFee}
              schoolLikes={data.schoolLikes}
              schoolComment={data.schoolComment}
              schoolBanner={data.schoolBanner}
              schoolIntro={data.schoolIntro}
              schoolComments={data.schoolComments}
              schoolImages={data.schoolImages}
            />
          )}
        />
      );
    });
    return (
      <div>
        <BrowserRouter>
          <Header />
          <div className="main">
            <Route
              exact
              path="/"
              render={() => (
                <HomeContainer schoolData={this.state.schoolData} />
              )}
            />
            {routerSchools}
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default Main;
