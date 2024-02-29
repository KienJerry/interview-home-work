-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 29, 2024 at 05:09 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `interview_home_work`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `id` varchar(36) NOT NULL,
  `content` text NOT NULL,
  `ownerId` varchar(255) DEFAULT NULL,
  `postId` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`updated_at`, `created_at`, `id`, `content`, `ownerId`, `postId`) VALUES
(NULL, '2024-02-29 04:05:11', '69f93d25-af21-48be-9cea-cb6a386e0c16', 'Các bạn đọc vui vẻ', 'a494db05-413a-4e1d-95b6-1da368aee9a2', '6cb6e061-f909-41bd-8d7d-da94d954c2d2'),
(NULL, '2024-02-29 04:07:57', '9e92e13a-aa64-47e9-a3bd-19f3afcd62fb', 'Rất bổ ích , 1 like', 'a494db05-413a-4e1d-95b6-1da368aee9a2', '985d468c-be8f-4d92-b150-603d317a732b');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `id` varchar(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `tags` text NOT NULL,
  `ownerId` varchar(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`updated_at`, `created_at`, `id`, `title`, `content`, `tags`, `ownerId`) VALUES
(NULL, '2024-02-29 04:07:07', '12b36cb5-be26-43b4-8290-5b82bc7c1313', '15+ IT Blogger Việt bạn không nên bỏ qua năm 2024', '30% Developer đọc blog để tìm câu trả lời khi ăn “bí” – Đó là kết quả mà ITviec đã khảo sát được.\n\nDo đó, ITviec đã tổng hợp và cập nhật 15+ IT blogger Việt Nam “chất” nhất để giúp bạn:\n\nTìm hiểu các thông tin công nghệ mới nhất\nDễ dàng tiếp cận kiến thức bằng tiếng Việt\nThảo luận các vấn đề phát sinh trước và sau lập trình\nTham khảo hàng trăm việc làm developer chất tại ITviec!', '', 'a494db05-413a-4e1d-95b6-1da368aee9a2'),
(NULL, '2024-02-29 04:02:57', '13ea3972-38b0-45f5-a0b8-9f48dc36fb3d', 'TOP 5 BLOG VỀ IT ĐÁNG ĐỌC', 'Vào những lúc rảnh rỗi, mình thường hay đọc đủ thử: Sách, manga, tiểu thuyết, báo lá cải… Từ hồi đi làm, không còn được vào webtretho hay vozforum thoải mái, mình bắt đầu chuyển qua đọc ebook IT và blog IT xem như để giết thời gian. Đọc mấy thứ này thì người xung quanh đi qua vẫn thưởng bạn đang chăm chú code hay nghiên cứu, lại còn tăng khả năng + kiến thức lập trình, do đó hôm nay mình chia sẻ cho mọi người, mong được ủng hộ.  Lưu ý, top 5 này chỉ là ý kiến của cá nhân mình, bạn nào muốn đóng góp thêm vào danh sách này có thể thoái mái đóng góp trong mục comment nhé.', '', '51a82b86-d392-435a-adb3-a3c503258437'),
(NULL, '2024-02-29 04:07:05', '3036c424-d89a-49d3-8063-eda7452b6086', '15+ IT Blogger Việt bạn không nên bỏ qua năm 2024', '30% Developer đọc blog để tìm câu trả lời khi ăn “bí” – Đó là kết quả mà ITviec đã khảo sát được.\n\nDo đó, ITviec đã tổng hợp và cập nhật 15+ IT blogger Việt Nam “chất” nhất để giúp bạn:\n\nTìm hiểu các thông tin công nghệ mới nhất\nDễ dàng tiếp cận kiến thức bằng tiếng Việt\nThảo luận các vấn đề phát sinh trước và sau lập trình\nTham khảo hàng trăm việc làm developer chất tại ITviec!', '', 'a494db05-413a-4e1d-95b6-1da368aee9a2'),
(NULL, '2024-02-29 04:04:37', '6cb6e061-f909-41bd-8d7d-da94d954c2d2', '15+ IT Blogger Việt bạn không nên bỏ qua năm 2024', '30% Developer đọc blog để tìm câu trả lời khi ăn “bí” – Đó là kết quả mà ITviec đã khảo sát được.\n\nDo đó, ITviec đã tổng hợp và cập nhật 15+ IT blogger Việt Nam “chất” nhất để giúp bạn:\n\nTìm hiểu các thông tin công nghệ mới nhất\nDễ dàng tiếp cận kiến thức bằng tiếng Việt\nThảo luận các vấn đề phát sinh trước và sau lập trình\nTham khảo hàng trăm việc làm developer chất tại ITviec!', '', 'a494db05-413a-4e1d-95b6-1da368aee9a2'),
(NULL, '2024-02-29 04:07:33', '985d468c-be8f-4d92-b150-603d317a732b', 'Bài viết nổi bật', 'úng với tên gọi, blog asktester.com xuất hiện như diễn đàn thảo luận, chia sẻ về ngành Testing. Blogger Huỳnh Công Thành với nhiều năm kinh nghiệm đưa ra thông tin cụ thể, chi tiết và định hướng các nhân tố mới trong lĩnh vực Testing.', '', 'a494db05-413a-4e1d-95b6-1da368aee9a2'),
(NULL, '2024-02-29 04:07:08', 'ae52ca04-80e4-48b1-badb-a5cac2434b35', '15+ IT Blogger Việt bạn không nên bỏ qua năm 2024', '30% Developer đọc blog để tìm câu trả lời khi ăn “bí” – Đó là kết quả mà ITviec đã khảo sát được.\n\nDo đó, ITviec đã tổng hợp và cập nhật 15+ IT blogger Việt Nam “chất” nhất để giúp bạn:\n\nTìm hiểu các thông tin công nghệ mới nhất\nDễ dàng tiếp cận kiến thức bằng tiếng Việt\nThảo luận các vấn đề phát sinh trước và sau lập trình\nTham khảo hàng trăm việc làm developer chất tại ITviec!', '', 'a494db05-413a-4e1d-95b6-1da368aee9a2'),
(NULL, '2024-02-29 04:07:32', 'b6d63296-a9bc-4eed-8561-124e4b6d3aa1', 'Bài viết nổi bật', 'úng với tên gọi, blog asktester.com xuất hiện như diễn đàn thảo luận, chia sẻ về ngành Testing. Blogger Huỳnh Công Thành với nhiều năm kinh nghiệm đưa ra thông tin cụ thể, chi tiết và định hướng các nhân tố mới trong lĩnh vực Testing.', '', 'a494db05-413a-4e1d-95b6-1da368aee9a2');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `id` varchar(36) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `passWord` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `dob` varchar(10) DEFAULT NULL,
  `active` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`updated_at`, `created_at`, `id`, `userName`, `passWord`, `name`, `dob`, `active`) VALUES
(NULL, '2024-02-29 04:02:00', '51a82b86-d392-435a-adb3-a3c503258437', 'superadmin', '$2a$15$Ju.N6TowfNdPzbi0OrL0Jef73EagxWyEV/PWwfsEilnGAtNL5MEEK', 'Nguyễn Văn A', NULL, 1),
(NULL, '2024-02-29 04:04:00', 'a494db05-413a-4e1d-95b6-1da368aee9a2', 'superadmin1', '$2a$15$x49sk/98bE3QnXwR/20xee0K8jyE07Onk2pSlnbKsPLO5u3UWGo7u', 'Trần Quang Thắng', NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_8bf68bc960f2b69e818bdb90dc` (`id`),
  ADD KEY `FK_c3e176b501c43e0f48a04f58c0e` (`ownerId`),
  ADD KEY `FK_e44ddaaa6d058cb4092f83ad61f` (`postId`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_2829ac61eff60fcec60d7274b9` (`id`),
  ADD KEY `FK_0e33434a2d18c89a149c8ad6d86` (`ownerId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_226bb9aa7aa8a69991209d58f5` (`userName`),
  ADD KEY `IDX_a3ffb1c0c8416b9fc6f907b743` (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `FK_c3e176b501c43e0f48a04f58c0e` FOREIGN KEY (`ownerId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_e44ddaaa6d058cb4092f83ad61f` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `FK_0e33434a2d18c89a149c8ad6d86` FOREIGN KEY (`ownerId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
