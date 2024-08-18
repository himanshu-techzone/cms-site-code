-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2022 at 11:53 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aestiva`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `abt_id` int(11) NOT NULL,
  `about_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `name` text DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `home_image` varchar(100) DEFAULT NULL,
  `home_section` text DEFAULT NULL,
  `heading1` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `section1` text CHARACTER SET utf8 DEFAULT NULL,
  `section2` text CHARACTER SET utf8 DEFAULT NULL,
  `heading2` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `section3` text CHARACTER SET utf8 DEFAULT NULL,
  `heading3` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `section4` text CHARACTER SET utf8 DEFAULT NULL,
  `heading4` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `section5` text CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `about_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `about_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `app_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `date` varchar(100) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `blg_id` int(11) NOT NULL,
  `blog_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `blog_show_type` enum('inside','outside') NOT NULL,
  `blog_type` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `name` text CHARACTER SET utf8 DEFAULT NULL,
  `dr_description` text CHARACTER SET utf8 DEFAULT NULL,
  `blog_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `short_desc` text CHARACTER SET utf8 DEFAULT NULL,
  `blog_description` text CHARACTER SET utf8 DEFAULT NULL,
  `blog_image` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `alt_image_name` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `blog_image_inner` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `tags` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `title_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `canonical` text CHARACTER SET utf8 DEFAULT NULL,
  `url` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `blog_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `blog_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `date` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `blog_comment`
--

CREATE TABLE `blog_comment` (
  `blg_comm_id` int(11) NOT NULL,
  `blog_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `parent_id` int(11) NOT NULL,
  `blog_id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `phone` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `comment` text CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('inactive','active') CHARACTER SET utf8 NOT NULL,
  `blog_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `blog_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `blog_like`
--

CREATE TABLE `blog_like` (
  `blg_lik_id` int(11) NOT NULL,
  `blog_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `blog_id` int(11) NOT NULL,
  `ip_address` varchar(100) CHARACTER SET utf8 NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `case_studies`
--

CREATE TABLE `case_studies` (
  `case_id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `show_type` varchar(100) DEFAULT NULL,
  `category_type` varchar(50) DEFAULT NULL,
  `design_type` enum('left','right') DEFAULT NULL,
  `video_type` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `case_cat_id` int(11) DEFAULT NULL,
  `case_type` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `case_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `case_image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `case_banner_image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `home_banner_image` varchar(255) DEFAULT NULL,
  `video_link` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `alt_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description` text CHARACTER SET utf8 DEFAULT NULL,
  `homedescription` text DEFAULT NULL,
  `short_desc` text CHARACTER SET utf8 DEFAULT NULL,
  `section` longtext DEFAULT NULL,
  `title_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `canonical_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `url` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `order_by` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `cfg_mnu_operations`
--

CREATE TABLE `cfg_mnu_operations` (
  `mnu_oper_id` int(11) NOT NULL,
  `cfg_oper_key` varchar(225) DEFAULT NULL,
  `cfg_mun_id` int(11) NOT NULL,
  `cfg_op_id` bigint(20) DEFAULT NULL,
  `cfg_op_attr` longtext DEFAULT NULL,
  `created_by` varchar(225) DEFAULT NULL,
  `updated_by` varchar(225) DEFAULT NULL,
  `deleted_by` varchar(225) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cfg_mnu_operations`
--

INSERT INTO `cfg_mnu_operations` (`mnu_oper_id`, `cfg_oper_key`, `cfg_mun_id`, `cfg_op_id`, `cfg_op_attr`, `created_by`, `updated_by`, `deleted_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '1625145141.645760ddbf359da35', 1, 1, NULL, '1', '1', NULL, '2021-07-01 07:42:21', '2022-05-12 09:40:59', NULL),
(2, '1625145141.656460ddbf35a040d', 1, 2, NULL, '1', '1', NULL, '2021-07-01 07:42:21', '2021-07-08 11:15:32', NULL),
(3, '1625145166.24760ddbf4e3c510', 2, 5, NULL, '2', '1', NULL, '2021-07-01 07:42:46', '2021-07-02 12:09:13', NULL),
(4, '1625145203.704760ddbf73ac0cd', 4, 7, NULL, '4', NULL, NULL, '2021-07-01 07:43:23', '2021-07-01 07:43:23', NULL),
(5, '1625145203.71660ddbf73aecc6', 4, 8, NULL, '4', NULL, NULL, '2021-07-01 07:43:23', '2021-07-01 07:43:23', NULL),
(6, '1625145203.719160ddbf73af919', 4, 9, NULL, '4', NULL, NULL, '2021-07-01 07:43:23', '2021-07-01 07:43:23', NULL),
(7, '1625145203.721760ddbf73b033e', 4, 10, NULL, '4', NULL, NULL, '2021-07-01 07:43:23', '2021-07-01 07:43:23', NULL),
(8, '1625559507.70860e411d3acdaf', 3, 3, NULL, '3', NULL, NULL, '2021-07-06 08:18:27', '2021-07-06 08:18:27', NULL),
(9, '1625559507.713360e411d3ae26b', 3, 4, NULL, '3', NULL, NULL, '2021-07-06 08:18:27', '2021-07-06 08:18:27', NULL),
(10, '1625559536.339360e411f052d3a', 5, 11, NULL, '5', NULL, NULL, '2021-07-06 08:18:56', '2021-07-06 08:18:56', NULL),
(11, '1625559557.959160e41205ea2aa', 5, 12, NULL, '5', NULL, NULL, '2021-07-06 08:19:17', '2021-07-06 08:19:17', NULL),
(12, '1625559581.378960e4121d5c817', 5, 13, NULL, '5', NULL, NULL, '2021-07-06 08:19:41', '2021-07-06 08:19:41', NULL),
(13, '1625742948.254260e6de643e0ef', 6, 14, NULL, '6', NULL, NULL, '2021-07-08 11:15:48', '2021-07-08 11:15:48', NULL),
(14, '1626951845.285460f950a545ae8', 7, 15, NULL, '7', NULL, NULL, '2021-07-22 11:04:05', '2021-07-22 11:04:05', NULL),
(15, '1627710002.86336104e232d2c74', 8, 16, NULL, '8', NULL, NULL, '2021-07-31 05:40:02', '2021-07-31 05:40:02', NULL),
(16, '1627710002.86746104e232d3c3a', 8, 17, NULL, '8', NULL, NULL, '2021-07-31 05:40:02', '2021-07-31 05:40:02', NULL),
(17, '1630042568.4888612879c877535', 8, 18, NULL, '8', NULL, NULL, '2021-08-27 05:36:08', '2021-08-27 05:36:08', NULL),
(18, '1630042614.6253612879f698aa1', 9, 19, NULL, '9', NULL, NULL, '2021-08-27 05:36:54', '2021-08-27 05:36:54', NULL),
(19, '1630042614.6288612879f699822', 9, 20, NULL, '9', NULL, NULL, '2021-08-27 05:36:54', '2021-08-27 05:36:54', NULL),
(20, '1630042614.6341612879f69ad19', 9, 21, NULL, '9', NULL, NULL, '2021-08-27 05:36:54', '2021-08-27 05:36:54', NULL),
(21, '1630042654.08361287a1e14440', 10, 22, NULL, '10', NULL, NULL, '2021-08-27 05:37:34', '2021-08-27 05:37:34', NULL),
(22, '1630042654.086661287a1e1524f', 10, 23, NULL, '10', NULL, NULL, '2021-08-27 05:37:34', '2021-08-27 05:37:34', NULL),
(23, '1630042654.090161287a1e15ff4', 10, 24, NULL, '10', NULL, NULL, '2021-08-27 05:37:34', '2021-08-27 05:37:34', NULL),
(24, '1630042707.95961287a53ea220', 15, 25, NULL, '15', NULL, NULL, '2021-08-27 05:38:27', '2021-08-27 05:38:27', NULL),
(25, '1630042707.963361287a53eb2ff', 15, 26, NULL, '15', NULL, NULL, '2021-08-27 05:38:27', '2021-08-27 05:38:27', NULL),
(26, '1630042747.057561287a7b0e096', 16, 27, NULL, '16', NULL, NULL, '2021-08-27 05:39:07', '2021-08-27 05:39:07', NULL),
(27, '1630385483.4866612db54b76cf8', 1, 28, NULL, '1', NULL, NULL, '2021-08-31 04:51:23', '2021-08-31 04:51:23', NULL),
(28, '1631184462.30696139e64e4aefb', 18, 29, NULL, '18', NULL, NULL, '2021-09-09 10:47:42', '2021-09-09 10:47:42', NULL),
(29, '1631184462.31216139e64e4c348', 18, 30, NULL, '18', NULL, NULL, '2021-09-09 10:47:42', '2021-09-09 10:47:42', NULL),
(30, '1631184462.31716139e64e4d6a7', 18, 31, NULL, '18', NULL, NULL, '2021-09-09 10:47:42', '2021-09-09 10:47:42', NULL),
(31, '1634368634.3085616a7c7a4b525', 5, 33, NULL, '5', NULL, NULL, '2021-10-16 07:17:14', '2021-10-16 07:17:14', NULL),
(32, '1634550270.2173616d41fe35101', 8, 36, NULL, '8', NULL, NULL, '2021-10-18 09:44:30', '2021-10-18 09:44:30', NULL),
(33, '1634550270.2233616d41fe3686f', 8, 37, NULL, '8', NULL, NULL, '2021-10-18 09:44:30', '2021-10-18 09:44:30', NULL),
(34, '1634550270.2279616d41fe37a61', 8, 38, NULL, '8', NULL, NULL, '2021-10-18 09:44:30', '2021-10-18 09:44:30', NULL),
(35, '1634550270.2324616d41fe38ba2', 8, 39, NULL, '8', NULL, NULL, '2021-10-18 09:44:30', '2021-10-18 09:44:30', NULL),
(36, '1634880045.03161724a2d0791d', 9, 43, NULL, '9', NULL, NULL, '2021-10-22 05:20:45', '2021-10-22 05:20:45', NULL),
(37, '1634880045.036861724a2d08fd2', 9, 40, NULL, '9', NULL, NULL, '2021-10-22 05:20:45', '2021-10-22 05:20:45', NULL),
(38, '1634880045.0461724a2d09c62', 9, 41, NULL, '9', NULL, NULL, '2021-10-22 05:20:45', '2021-10-22 05:20:45', NULL),
(39, '1634880045.043661724a2d0aa6e', 9, 42, NULL, '9', NULL, NULL, '2021-10-22 05:20:45', '2021-10-22 05:20:45', NULL),
(40, '1634880082.931161724a52e3532', 10, 44, NULL, '10', NULL, NULL, '2021-10-22 05:21:22', '2021-10-22 05:21:22', NULL),
(41, '1634880082.938361724a52e514a', 10, 45, NULL, '10', NULL, NULL, '2021-10-22 05:21:22', '2021-10-22 05:21:22', NULL),
(42, '1634880082.942561724a52e61b6', 10, 46, NULL, '10', NULL, NULL, '2021-10-22 05:21:22', '2021-10-22 05:21:22', NULL),
(43, '1634880082.946661724a52e7195', 10, 47, NULL, '10', NULL, NULL, '2021-10-22 05:21:22', '2021-10-22 05:21:22', NULL),
(44, '1635411320.5124617a65787d1c7', 18, 48, NULL, '18', NULL, NULL, '2021-10-28 08:55:20', '2021-10-28 08:55:20', NULL),
(45, '1635411566.717617a666eaf0d7', 18, 49, NULL, '18', NULL, NULL, '2021-10-28 08:59:26', '2021-10-28 08:59:26', NULL),
(46, '1637566495.9261619b481fe2183', 21, 50, NULL, '21', NULL, NULL, '2021-11-22 13:04:55', '2021-11-22 13:04:55', NULL),
(47, '1637566495.9296619b481fe2f41', 21, 51, NULL, '21', NULL, NULL, '2021-11-22 13:04:55', '2021-11-22 13:04:55', NULL),
(48, '1637566525.6961619b483da9f41', 22, 52, NULL, '22', NULL, NULL, '2021-11-22 13:05:25', '2021-11-22 13:05:25', NULL),
(49, '1637566525.7005619b483dab04d', 22, 53, NULL, '22', NULL, NULL, '2021-11-22 13:05:25', '2021-11-22 13:05:25', NULL),
(50, '1637566550.7667619b4856bb2f7', 23, 54, NULL, '23', NULL, NULL, '2021-11-22 13:05:50', '2021-11-22 13:05:50', NULL),
(51, '1637566550.7707619b4856bc276', 23, 55, NULL, '23', NULL, NULL, '2021-11-22 13:05:50', '2021-11-22 13:05:50', NULL),
(52, '1637566593.7599619b4881b9846', 24, 57, NULL, '24', NULL, NULL, '2021-11-22 13:06:33', '2021-11-22 13:06:33', NULL),
(53, '1642750003.643461ea60339d146', 27, 58, NULL, '27', NULL, NULL, '2022-01-21 07:26:43', '2022-01-21 07:26:43', NULL),
(54, '1637566593.7599619b4881b9846', 13, 59, NULL, '24', NULL, NULL, '2021-11-22 13:06:33', '2021-11-22 13:06:33', NULL),
(55, '1642750003.643461ea60339d146', 13, 60, NULL, '27', NULL, NULL, '2022-01-21 07:26:43', '2022-01-21 07:26:43', NULL),
(56, '1642750003.643461ea60339d145', 7, 61, NULL, '27', NULL, NULL, '2022-01-21 07:26:43', '2022-01-21 07:26:43', NULL),
(57, '1642750003.643461ea60339d145', 29, 62, NULL, '27', NULL, NULL, '2022-01-21 07:26:43', '2022-01-21 07:26:43', NULL),
(58, '1642750003.6435661ea60339d145', 29, 63, NULL, '27', NULL, NULL, '2022-01-21 07:26:43', '2022-01-21 07:26:43', NULL),
(59, '1642750003.64ed3461ea60339d145', 29, 64, NULL, '27', NULL, NULL, '2022-01-21 07:26:43', '2022-01-21 07:26:43', NULL),
(60, '1642750003.645461ea60339d145', 30, 71, NULL, '27', NULL, NULL, '2022-01-21 07:26:43', '2022-01-21 07:26:43', NULL),
(61, '1642750003.6435661ea60339d12', 30, 65, NULL, '27', NULL, NULL, '2022-01-21 07:26:43', '2022-01-21 07:26:43', NULL),
(62, '1642750003.64ed3461ea60339de', 30, 66, NULL, '27', NULL, NULL, '2022-01-21 07:26:43', '2022-01-21 07:26:43', NULL),
(63, '1642750003.64ed3461ea60339d145', 19, 67, NULL, '27', NULL, NULL, '2022-01-21 07:26:43', '2022-01-21 07:26:43', NULL),
(64, '1642750003.645461ea60339d145', 19, 68, NULL, '27', NULL, NULL, '2022-01-21 07:26:43', '2022-01-21 07:26:43', NULL),
(65, '1642750003.6435661ea60339d12', 19, 69, NULL, '27', NULL, NULL, '2022-01-21 07:26:43', '2022-01-21 07:26:43', NULL),
(66, '1642750003.64ed3461ea60339de', 19, 70, NULL, '27', NULL, NULL, '2022-01-21 07:26:43', '2022-01-21 07:26:43', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cfg_plan_config`
--

CREATE TABLE `cfg_plan_config` (
  `clc_id` int(10) UNSIGNED NOT NULL,
  `clc_key` varchar(225) DEFAULT NULL,
  `clc_plan_id` bigint(20) DEFAULT NULL,
  `clc_mnu_id` bigint(20) DEFAULT NULL,
  `clc_op_id` bigint(20) DEFAULT NULL,
  `clc_attr` longtext DEFAULT NULL,
  `created_by` varchar(225) DEFAULT NULL,
  `updated_by` varchar(225) DEFAULT NULL,
  `deleted_by` varchar(225) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cfg_plan_config`
--

INSERT INTO `cfg_plan_config` (`clc_id`, `clc_key`, `clc_plan_id`, `clc_mnu_id`, `clc_op_id`, `clc_attr`, `created_by`, `updated_by`, `deleted_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '1635591510.7098617d2556ad498', 1, 1, NULL, NULL, '1', NULL, NULL, '2021-10-30 16:28:30', '2021-10-30 16:28:30', NULL),
(2, '1635591510.7144617d2556ae683', 1, 3, NULL, NULL, '1', NULL, NULL, '2021-10-30 16:28:30', '2021-10-30 16:28:30', NULL),
(3, '1635591510.7197617d2556afb68', 1, 5, NULL, NULL, '1', NULL, NULL, '2021-10-30 16:28:30', '2021-10-30 16:28:30', NULL),
(4, '1635591510.7231617d2556b08a3', 1, 20, NULL, NULL, '1', NULL, '1', '2021-10-30 16:28:30', '2021-11-01 11:03:18', '2021-11-01 11:03:18'),
(5, '1635591510.7273617d2556b192b', 1, 1, 2, NULL, '1', NULL, NULL, '2021-10-30 16:28:30', '2021-10-30 16:28:30', NULL),
(6, '1635591510.7314617d2556b2925', 1, 1, 28, NULL, '1', NULL, '1', '2021-10-30 16:28:30', '2021-11-22 15:22:35', '2021-11-22 15:22:35'),
(7, '1635591510.7359617d2556b3a90', 1, 3, 3, NULL, '1', NULL, NULL, '2021-10-30 16:28:30', '2021-10-30 16:28:30', NULL),
(8, '1635591510.7413617d2556b4fe4', 1, 3, 4, NULL, '1', NULL, NULL, '2021-10-30 16:28:30', '2021-10-30 16:28:30', NULL),
(9, '1635591510.7458617d2556b6161', 1, 5, 11, NULL, '1', NULL, NULL, '2021-10-30 16:28:30', '2021-10-30 16:28:30', NULL),
(10, '1635591510.7504617d2556b7316', 1, 5, 12, NULL, '1', NULL, NULL, '2021-10-30 16:28:30', '2021-10-30 16:28:30', NULL),
(11, '1635591510.7546617d2556b8388', 1, 5, 13, NULL, '1', NULL, NULL, '2021-10-30 16:28:30', '2021-10-30 16:28:30', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cfg_role_menu`
--

CREATE TABLE `cfg_role_menu` (
  `cfgmnu_id` int(11) NOT NULL,
  `cfgmnu_key` varchar(225) DEFAULT NULL,
  `cfgmnu_mnu_id` bigint(20) DEFAULT NULL,
  `cfgmnu_act_id` bigint(20) DEFAULT NULL,
  `cfgmnu_org_id` int(11) DEFAULT NULL,
  `cfgmnu_site_id` int(11) DEFAULT NULL,
  `cfgmnu_role_id` int(11) DEFAULT NULL,
  `cfgmnu_attr` longtext DEFAULT NULL,
  `created_by` varchar(225) DEFAULT NULL,
  `updated_by` varchar(225) DEFAULT NULL,
  `deleted_by` varchar(225) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cfg_role_menu`
--

INSERT INTO `cfg_role_menu` (`cfgmnu_id`, `cfgmnu_key`, `cfgmnu_mnu_id`, `cfgmnu_act_id`, `cfgmnu_org_id`, `cfgmnu_site_id`, `cfgmnu_role_id`, `cfgmnu_attr`, `created_by`, `updated_by`, `deleted_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, NULL, 17, 1, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:49:20', '2022-05-11 10:49:20', NULL),
(2, NULL, 21, 1, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:49:20', '2022-05-11 10:49:20', NULL),
(3, NULL, 17, 2, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:49:20', '2022-05-11 10:49:20', NULL),
(4, NULL, 21, 2, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:49:20', '2022-05-11 10:49:20', NULL),
(5, NULL, 17, 3, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:49:20', '2022-05-11 10:49:20', NULL),
(6, NULL, 21, 3, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:49:20', '2022-05-11 10:49:20', NULL),
(7, NULL, 17, 4, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:49:20', '2022-05-11 10:49:20', NULL),
(8, NULL, 21, 4, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:49:20', '2022-05-11 10:49:20', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cfg_role_operations`
--

CREATE TABLE `cfg_role_operations` (
  `oper_id` int(11) NOT NULL,
  `oper_key` varchar(225) DEFAULT NULL,
  `oper_op_id` bigint(20) DEFAULT NULL,
  `oper_act_id` bigint(20) DEFAULT NULL,
  `oper_org_id` int(11) NOT NULL,
  `oper_site_id` int(11) DEFAULT NULL,
  `oper_role_id` int(11) NOT NULL,
  `op_attr` longtext DEFAULT NULL,
  `created_by` varchar(225) DEFAULT NULL,
  `updated_by` varchar(225) DEFAULT NULL,
  `deleted_by` varchar(225) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cfg_role_operations`
--

INSERT INTO `cfg_role_operations` (`oper_id`, `oper_key`, `oper_op_id`, `oper_act_id`, `oper_org_id`, `oper_site_id`, `oper_role_id`, `op_attr`, `created_by`, `updated_by`, `deleted_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, NULL, 51, 1, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:50:05', '2022-05-11 10:50:05', NULL),
(2, NULL, 50, 1, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:50:05', '2022-05-11 10:50:05', NULL),
(3, NULL, 51, 2, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:50:05', '2022-05-11 10:50:05', NULL),
(4, NULL, 50, 2, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:50:05', '2022-05-11 10:50:05', NULL),
(5, NULL, 51, 3, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:50:05', '2022-05-11 10:50:05', NULL),
(6, NULL, 50, 3, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:50:05', '2022-05-11 10:50:05', NULL),
(7, NULL, 51, 4, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:50:05', '2022-05-11 10:50:05', NULL),
(8, NULL, 50, 4, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:50:05', '2022-05-11 10:50:05', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cfg_usr_role`
--

CREATE TABLE `cfg_usr_role` (
  `usr_role_id` int(11) NOT NULL,
  `usr_role_key` varchar(225) DEFAULT NULL,
  `usr_id` bigint(20) DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL,
  `plan_id` bigint(20) DEFAULT NULL,
  `act_id` bigint(20) DEFAULT NULL,
  `cfg_org_id` int(11) NOT NULL,
  `usr_role_attr` longtext DEFAULT NULL,
  `created_by` varchar(225) DEFAULT NULL,
  `updated_by` varchar(225) DEFAULT NULL,
  `deleted_by` varchar(225) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cfg_usr_role`
--

INSERT INTO `cfg_usr_role` (`usr_role_id`, `usr_role_key`, `usr_id`, `role_id`, `plan_id`, `act_id`, `cfg_org_id`, `usr_role_attr`, `created_by`, `updated_by`, `deleted_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, NULL, 2, 1, 1, NULL, 1, NULL, '1', NULL, NULL, '2022-05-11 10:43:41', '2022-05-11 10:43:41', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `concern`
--

CREATE TABLE `concern` (
  `con_id` int(11) NOT NULL,
  `con_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `sort_desc` text CHARACTER SET utf8 DEFAULT NULL,
  `description` text CHARACTER SET utf8 DEFAULT NULL,
  `image` varchar(150) CHARACTER SET utf8 DEFAULT NULL,
  `alt_tag` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `concern_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `concern_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `contact_detail`
--

CREATE TABLE `contact_detail` (
  `contact_id` int(11) NOT NULL,
  `contact_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `show_type` varchar(100) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `address` text CHARACTER SET utf8 DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  `email_id` text CHARACTER SET utf8 DEFAULT NULL,
  `phone` text CHARACTER SET utf8 DEFAULT NULL,
  `timings` text CHARACTER SET utf8 DEFAULT NULL,
  `title_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` text CHARACTER SET utf8 DEFAULT NULL,
  `canonical_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `order_by` int(11) DEFAULT NULL,
  `contact_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `contact_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `contactus_id` int(11) NOT NULL,
  `contact_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `name` varchar(250) CHARACTER SET utf8 NOT NULL,
  `email` varchar(250) CHARACTER SET utf8 NOT NULL,
  `phone` varchar(100) CHARACTER SET utf8 NOT NULL,
  `message` text CHARACTER SET utf8 DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `country_id` int(11) NOT NULL,
  `iso` char(2) NOT NULL,
  `name` varchar(80) NOT NULL,
  `nicename` varchar(80) NOT NULL,
  `iso3` char(3) DEFAULT NULL,
  `numcode` smallint(6) DEFAULT NULL,
  `phonecode` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`country_id`, `iso`, `name`, `nicename`, `iso3`, `numcode`, `phonecode`) VALUES
(1, 'AF', 'AFGHANISTAN', 'Afghanistan', 'AFG', 4, 93),
(2, 'AL', 'ALBANIA', 'Albania', 'ALB', 8, 355),
(3, 'DZ', 'ALGERIA', 'Algeria', 'DZA', 12, 213),
(4, 'AS', 'AMERICAN SAMOA', 'American Samoa', 'ASM', 16, 1684),
(5, 'AD', 'ANDORRA', 'Andorra', 'AND', 20, 376),
(6, 'AO', 'ANGOLA', 'Angola', 'AGO', 24, 244),
(7, 'AI', 'ANGUILLA', 'Anguilla', 'AIA', 660, 1264),
(8, 'AQ', 'ANTARCTICA', 'Antarctica', NULL, NULL, 0),
(9, 'AG', 'ANTIGUA AND BARBUDA', 'Antigua and Barbuda', 'ATG', 28, 1268),
(10, 'AR', 'ARGENTINA', 'Argentina', 'ARG', 32, 54),
(11, 'AM', 'ARMENIA', 'Armenia', 'ARM', 51, 374),
(12, 'AW', 'ARUBA', 'Aruba', 'ABW', 533, 297),
(13, 'AU', 'AUSTRALIA', 'Australia', 'AUS', 36, 61),
(14, 'AT', 'AUSTRIA', 'Austria', 'AUT', 40, 43),
(15, 'AZ', 'AZERBAIJAN', 'Azerbaijan', 'AZE', 31, 994),
(16, 'BS', 'BAHAMAS', 'Bahamas', 'BHS', 44, 1242),
(17, 'BH', 'BAHRAIN', 'Bahrain', 'BHR', 48, 973),
(18, 'BD', 'BANGLADESH', 'Bangladesh', 'BGD', 50, 880),
(19, 'BB', 'BARBADOS', 'Barbados', 'BRB', 52, 1246),
(20, 'BY', 'BELARUS', 'Belarus', 'BLR', 112, 375),
(21, 'BE', 'BELGIUM', 'Belgium', 'BEL', 56, 32),
(22, 'BZ', 'BELIZE', 'Belize', 'BLZ', 84, 501),
(23, 'BJ', 'BENIN', 'Benin', 'BEN', 204, 229),
(24, 'BM', 'BERMUDA', 'Bermuda', 'BMU', 60, 1441),
(25, 'BT', 'BHUTAN', 'Bhutan', 'BTN', 64, 975),
(26, 'BO', 'BOLIVIA', 'Bolivia', 'BOL', 68, 591),
(27, 'BA', 'BOSNIA AND HERZEGOVINA', 'Bosnia and Herzegovina', 'BIH', 70, 387),
(28, 'BW', 'BOTSWANA', 'Botswana', 'BWA', 72, 267),
(29, 'BV', 'BOUVET ISLAND', 'Bouvet Island', NULL, NULL, 0),
(30, 'BR', 'BRAZIL', 'Brazil', 'BRA', 76, 55),
(31, 'IO', 'BRITISH INDIAN OCEAN TERRITORY', 'British Indian Ocean Territory', NULL, NULL, 246),
(32, 'BN', 'BRUNEI DARUSSALAM', 'Brunei Darussalam', 'BRN', 96, 673),
(33, 'BG', 'BULGARIA', 'Bulgaria', 'BGR', 100, 359),
(34, 'BF', 'BURKINA FASO', 'Burkina Faso', 'BFA', 854, 226),
(35, 'BI', 'BURUNDI', 'Burundi', 'BDI', 108, 257),
(36, 'KH', 'CAMBODIA', 'Cambodia', 'KHM', 116, 855),
(37, 'CM', 'CAMEROON', 'Cameroon', 'CMR', 120, 237),
(38, 'CA', 'CANADA', 'Canada', 'CAN', 124, 1),
(39, 'CV', 'CAPE VERDE', 'Cape Verde', 'CPV', 132, 238),
(40, 'KY', 'CAYMAN ISLANDS', 'Cayman Islands', 'CYM', 136, 1345),
(41, 'CF', 'CENTRAL AFRICAN REPUBLIC', 'Central African Republic', 'CAF', 140, 236),
(42, 'TD', 'CHAD', 'Chad', 'TCD', 148, 235),
(43, 'CL', 'CHILE', 'Chile', 'CHL', 152, 56),
(44, 'CN', 'CHINA', 'China', 'CHN', 156, 86),
(45, 'CX', 'CHRISTMAS ISLAND', 'Christmas Island', NULL, NULL, 61),
(46, 'CC', 'COCOS (KEELING) ISLANDS', 'Cocos (Keeling) Islands', NULL, NULL, 672),
(47, 'CO', 'COLOMBIA', 'Colombia', 'COL', 170, 57),
(48, 'KM', 'COMOROS', 'Comoros', 'COM', 174, 269),
(49, 'CG', 'CONGO', 'Congo', 'COG', 178, 242),
(50, 'CD', 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', 'Congo, the Democratic Republic of the', 'COD', 180, 242),
(51, 'CK', 'COOK ISLANDS', 'Cook Islands', 'COK', 184, 682),
(52, 'CR', 'COSTA RICA', 'Costa Rica', 'CRI', 188, 506),
(53, 'CI', 'COTE D\'IVOIRE', 'Cote D\'Ivoire', 'CIV', 384, 225),
(54, 'HR', 'CROATIA', 'Croatia', 'HRV', 191, 385),
(55, 'CU', 'CUBA', 'Cuba', 'CUB', 192, 53),
(56, 'CY', 'CYPRUS', 'Cyprus', 'CYP', 196, 357),
(57, 'CZ', 'CZECH REPUBLIC', 'Czech Republic', 'CZE', 203, 420),
(58, 'DK', 'DENMARK', 'Denmark', 'DNK', 208, 45),
(59, 'DJ', 'DJIBOUTI', 'Djibouti', 'DJI', 262, 253),
(60, 'DM', 'DOMINICA', 'Dominica', 'DMA', 212, 1767),
(61, 'DO', 'DOMINICAN REPUBLIC', 'Dominican Republic', 'DOM', 214, 1809),
(62, 'EC', 'ECUADOR', 'Ecuador', 'ECU', 218, 593),
(63, 'EG', 'EGYPT', 'Egypt', 'EGY', 818, 20),
(64, 'SV', 'EL SALVADOR', 'El Salvador', 'SLV', 222, 503),
(65, 'GQ', 'EQUATORIAL GUINEA', 'Equatorial Guinea', 'GNQ', 226, 240),
(66, 'ER', 'ERITREA', 'Eritrea', 'ERI', 232, 291),
(67, 'EE', 'ESTONIA', 'Estonia', 'EST', 233, 372),
(68, 'ET', 'ETHIOPIA', 'Ethiopia', 'ETH', 231, 251),
(69, 'FK', 'FALKLAND ISLANDS (MALVINAS)', 'Falkland Islands (Malvinas)', 'FLK', 238, 500),
(70, 'FO', 'FAROE ISLANDS', 'Faroe Islands', 'FRO', 234, 298),
(71, 'FJ', 'FIJI', 'Fiji', 'FJI', 242, 679),
(72, 'FI', 'FINLAND', 'Finland', 'FIN', 246, 358),
(73, 'FR', 'FRANCE', 'France', 'FRA', 250, 33),
(74, 'GF', 'FRENCH GUIANA', 'French Guiana', 'GUF', 254, 594),
(75, 'PF', 'FRENCH POLYNESIA', 'French Polynesia', 'PYF', 258, 689),
(76, 'TF', 'FRENCH SOUTHERN TERRITORIES', 'French Southern Territories', NULL, NULL, 0),
(77, 'GA', 'GABON', 'Gabon', 'GAB', 266, 241),
(78, 'GM', 'GAMBIA', 'Gambia', 'GMB', 270, 220),
(79, 'GE', 'GEORGIA', 'Georgia', 'GEO', 268, 995),
(80, 'DE', 'GERMANY', 'Germany', 'DEU', 276, 49),
(81, 'GH', 'GHANA', 'Ghana', 'GHA', 288, 233),
(82, 'GI', 'GIBRALTAR', 'Gibraltar', 'GIB', 292, 350),
(83, 'GR', 'GREECE', 'Greece', 'GRC', 300, 30),
(84, 'GL', 'GREENLAND', 'Greenland', 'GRL', 304, 299),
(85, 'GD', 'GRENADA', 'Grenada', 'GRD', 308, 1473),
(86, 'GP', 'GUADELOUPE', 'Guadeloupe', 'GLP', 312, 590),
(87, 'GU', 'GUAM', 'Guam', 'GUM', 316, 1671),
(88, 'GT', 'GUATEMALA', 'Guatemala', 'GTM', 320, 502),
(89, 'GN', 'GUINEA', 'Guinea', 'GIN', 324, 224),
(90, 'GW', 'GUINEA-BISSAU', 'Guinea-Bissau', 'GNB', 624, 245),
(91, 'GY', 'GUYANA', 'Guyana', 'GUY', 328, 592),
(92, 'HT', 'HAITI', 'Haiti', 'HTI', 332, 509),
(93, 'HM', 'HEARD ISLAND AND MCDONALD ISLANDS', 'Heard Island and Mcdonald Islands', NULL, NULL, 0),
(94, 'VA', 'HOLY SEE (VATICAN CITY STATE)', 'Holy See (Vatican City State)', 'VAT', 336, 39),
(95, 'HN', 'HONDURAS', 'Honduras', 'HND', 340, 504),
(96, 'HK', 'HONG KONG', 'Hong Kong', 'HKG', 344, 852),
(97, 'HU', 'HUNGARY', 'Hungary', 'HUN', 348, 36),
(98, 'IS', 'ICELAND', 'Iceland', 'ISL', 352, 354),
(99, 'IN', 'INDIA', 'India', 'IND', 356, 91),
(100, 'ID', 'INDONESIA', 'Indonesia', 'IDN', 360, 62),
(101, 'IR', 'IRAN, ISLAMIC REPUBLIC OF', 'Iran, Islamic Republic of', 'IRN', 364, 98),
(102, 'IQ', 'IRAQ', 'Iraq', 'IRQ', 368, 964),
(103, 'IE', 'IRELAND', 'Ireland', 'IRL', 372, 353),
(104, 'IL', 'ISRAEL', 'Israel', 'ISR', 376, 972),
(105, 'IT', 'ITALY', 'Italy', 'ITA', 380, 39),
(106, 'JM', 'JAMAICA', 'Jamaica', 'JAM', 388, 1876),
(107, 'JP', 'JAPAN', 'Japan', 'JPN', 392, 81),
(108, 'JO', 'JORDAN', 'Jordan', 'JOR', 400, 962),
(109, 'KZ', 'KAZAKHSTAN', 'Kazakhstan', 'KAZ', 398, 7),
(110, 'KE', 'KENYA', 'Kenya', 'KEN', 404, 254),
(111, 'KI', 'KIRIBATI', 'Kiribati', 'KIR', 296, 686),
(112, 'KP', 'KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF', 'Korea, Democratic People\'s Republic of', 'PRK', 408, 850),
(113, 'KR', 'KOREA, REPUBLIC OF', 'Korea, Republic of', 'KOR', 410, 82),
(114, 'KW', 'KUWAIT', 'Kuwait', 'KWT', 414, 965),
(115, 'KG', 'KYRGYZSTAN', 'Kyrgyzstan', 'KGZ', 417, 996),
(116, 'LA', 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC', 'Lao People\'s Democratic Republic', 'LAO', 418, 856),
(117, 'LV', 'LATVIA', 'Latvia', 'LVA', 428, 371),
(118, 'LB', 'LEBANON', 'Lebanon', 'LBN', 422, 961),
(119, 'LS', 'LESOTHO', 'Lesotho', 'LSO', 426, 266),
(120, 'LR', 'LIBERIA', 'Liberia', 'LBR', 430, 231),
(121, 'LY', 'LIBYAN ARAB JAMAHIRIYA', 'Libyan Arab Jamahiriya', 'LBY', 434, 218),
(122, 'LI', 'LIECHTENSTEIN', 'Liechtenstein', 'LIE', 438, 423),
(123, 'LT', 'LITHUANIA', 'Lithuania', 'LTU', 440, 370),
(124, 'LU', 'LUXEMBOURG', 'Luxembourg', 'LUX', 442, 352),
(125, 'MO', 'MACAO', 'Macao', 'MAC', 446, 853),
(126, 'MK', 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', 'Macedonia, the Former Yugoslav Republic of', 'MKD', 807, 389),
(127, 'MG', 'MADAGASCAR', 'Madagascar', 'MDG', 450, 261),
(128, 'MW', 'MALAWI', 'Malawi', 'MWI', 454, 265),
(129, 'MY', 'MALAYSIA', 'Malaysia', 'MYS', 458, 60),
(130, 'MV', 'MALDIVES', 'Maldives', 'MDV', 462, 960),
(131, 'ML', 'MALI', 'Mali', 'MLI', 466, 223),
(132, 'MT', 'MALTA', 'Malta', 'MLT', 470, 356),
(133, 'MH', 'MARSHALL ISLANDS', 'Marshall Islands', 'MHL', 584, 692),
(134, 'MQ', 'MARTINIQUE', 'Martinique', 'MTQ', 474, 596),
(135, 'MR', 'MAURITANIA', 'Mauritania', 'MRT', 478, 222),
(136, 'MU', 'MAURITIUS', 'Mauritius', 'MUS', 480, 230),
(137, 'YT', 'MAYOTTE', 'Mayotte', NULL, NULL, 269),
(138, 'MX', 'MEXICO', 'Mexico', 'MEX', 484, 52),
(139, 'FM', 'MICRONESIA, FEDERATED STATES OF', 'Micronesia, Federated States of', 'FSM', 583, 691),
(140, 'MD', 'MOLDOVA, REPUBLIC OF', 'Moldova, Republic of', 'MDA', 498, 373),
(141, 'MC', 'MONACO', 'Monaco', 'MCO', 492, 377),
(142, 'MN', 'MONGOLIA', 'Mongolia', 'MNG', 496, 976),
(143, 'MS', 'MONTSERRAT', 'Montserrat', 'MSR', 500, 1664),
(144, 'MA', 'MOROCCO', 'Morocco', 'MAR', 504, 212),
(145, 'MZ', 'MOZAMBIQUE', 'Mozambique', 'MOZ', 508, 258),
(146, 'MM', 'MYANMAR', 'Myanmar', 'MMR', 104, 95),
(147, 'NA', 'NAMIBIA', 'Namibia', 'NAM', 516, 264),
(148, 'NR', 'NAURU', 'Nauru', 'NRU', 520, 674),
(149, 'NP', 'NEPAL', 'Nepal', 'NPL', 524, 977),
(150, 'NL', 'NETHERLANDS', 'Netherlands', 'NLD', 528, 31),
(151, 'AN', 'NETHERLANDS ANTILLES', 'Netherlands Antilles', 'ANT', 530, 599),
(152, 'NC', 'NEW CALEDONIA', 'New Caledonia', 'NCL', 540, 687),
(153, 'NZ', 'NEW ZEALAND', 'New Zealand', 'NZL', 554, 64),
(154, 'NI', 'NICARAGUA', 'Nicaragua', 'NIC', 558, 505),
(155, 'NE', 'NIGER', 'Niger', 'NER', 562, 227),
(156, 'NG', 'NIGERIA', 'Nigeria', 'NGA', 566, 234),
(157, 'NU', 'NIUE', 'Niue', 'NIU', 570, 683),
(158, 'NF', 'NORFOLK ISLAND', 'Norfolk Island', 'NFK', 574, 672),
(159, 'MP', 'NORTHERN MARIANA ISLANDS', 'Northern Mariana Islands', 'MNP', 580, 1670),
(160, 'NO', 'NORWAY', 'Norway', 'NOR', 578, 47),
(161, 'OM', 'OMAN', 'Oman', 'OMN', 512, 968),
(162, 'PK', 'PAKISTAN', 'Pakistan', 'PAK', 586, 92),
(163, 'PW', 'PALAU', 'Palau', 'PLW', 585, 680),
(164, 'PS', 'PALESTINIAN TERRITORY, OCCUPIED', 'Palestinian Territory, Occupied', NULL, NULL, 970),
(165, 'PA', 'PANAMA', 'Panama', 'PAN', 591, 507),
(166, 'PG', 'PAPUA NEW GUINEA', 'Papua New Guinea', 'PNG', 598, 675),
(167, 'PY', 'PARAGUAY', 'Paraguay', 'PRY', 600, 595),
(168, 'PE', 'PERU', 'Peru', 'PER', 604, 51),
(169, 'PH', 'PHILIPPINES', 'Philippines', 'PHL', 608, 63),
(170, 'PN', 'PITCAIRN', 'Pitcairn', 'PCN', 612, 0),
(171, 'PL', 'POLAND', 'Poland', 'POL', 616, 48),
(172, 'PT', 'PORTUGAL', 'Portugal', 'PRT', 620, 351),
(173, 'PR', 'PUERTO RICO', 'Puerto Rico', 'PRI', 630, 1787),
(174, 'QA', 'QATAR', 'Qatar', 'QAT', 634, 974),
(175, 'RE', 'REUNION', 'Reunion', 'REU', 638, 262),
(176, 'RO', 'ROMANIA', 'Romania', 'ROM', 642, 40),
(177, 'RU', 'RUSSIAN FEDERATION', 'Russian Federation', 'RUS', 643, 70),
(178, 'RW', 'RWANDA', 'Rwanda', 'RWA', 646, 250),
(179, 'SH', 'SAINT HELENA', 'Saint Helena', 'SHN', 654, 290),
(180, 'KN', 'SAINT KITTS AND NEVIS', 'Saint Kitts and Nevis', 'KNA', 659, 1869),
(181, 'LC', 'SAINT LUCIA', 'Saint Lucia', 'LCA', 662, 1758),
(182, 'PM', 'SAINT PIERRE AND MIQUELON', 'Saint Pierre and Miquelon', 'SPM', 666, 508),
(183, 'VC', 'SAINT VINCENT AND THE GRENADINES', 'Saint Vincent and the Grenadines', 'VCT', 670, 1784),
(184, 'WS', 'SAMOA', 'Samoa', 'WSM', 882, 684),
(185, 'SM', 'SAN MARINO', 'San Marino', 'SMR', 674, 378),
(186, 'ST', 'SAO TOME AND PRINCIPE', 'Sao Tome and Principe', 'STP', 678, 239),
(187, 'SA', 'SAUDI ARABIA', 'Saudi Arabia', 'SAU', 682, 966),
(188, 'SN', 'SENEGAL', 'Senegal', 'SEN', 686, 221),
(189, 'CS', 'SERBIA AND MONTENEGRO', 'Serbia and Montenegro', NULL, NULL, 381),
(190, 'SC', 'SEYCHELLES', 'Seychelles', 'SYC', 690, 248),
(191, 'SL', 'SIERRA LEONE', 'Sierra Leone', 'SLE', 694, 232),
(192, 'SG', 'SINGAPORE', 'Singapore', 'SGP', 702, 65),
(193, 'SK', 'SLOVAKIA', 'Slovakia', 'SVK', 703, 421),
(194, 'SI', 'SLOVENIA', 'Slovenia', 'SVN', 705, 386),
(195, 'SB', 'SOLOMON ISLANDS', 'Solomon Islands', 'SLB', 90, 677),
(196, 'SO', 'SOMALIA', 'Somalia', 'SOM', 706, 252),
(197, 'ZA', 'SOUTH AFRICA', 'South Africa', 'ZAF', 710, 27),
(198, 'GS', 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS', 'South Georgia and the South Sandwich Islands', NULL, NULL, 0),
(199, 'ES', 'SPAIN', 'Spain', 'ESP', 724, 34),
(200, 'LK', 'SRI LANKA', 'Sri Lanka', 'LKA', 144, 94),
(201, 'SD', 'SUDAN', 'Sudan', 'SDN', 736, 249),
(202, 'SR', 'SURINAME', 'Suriname', 'SUR', 740, 597),
(203, 'SJ', 'SVALBARD AND JAN MAYEN', 'Svalbard and Jan Mayen', 'SJM', 744, 47),
(204, 'SZ', 'SWAZILAND', 'Swaziland', 'SWZ', 748, 268),
(205, 'SE', 'SWEDEN', 'Sweden', 'SWE', 752, 46),
(206, 'CH', 'SWITZERLAND', 'Switzerland', 'CHE', 756, 41),
(207, 'SY', 'SYRIAN ARAB REPUBLIC', 'Syrian Arab Republic', 'SYR', 760, 963),
(208, 'TW', 'TAIWAN, PROVINCE OF CHINA', 'Taiwan, Province of China', 'TWN', 158, 886),
(209, 'TJ', 'TAJIKISTAN', 'Tajikistan', 'TJK', 762, 992),
(210, 'TZ', 'TANZANIA, UNITED REPUBLIC OF', 'Tanzania, United Republic of', 'TZA', 834, 255),
(211, 'TH', 'THAILAND', 'Thailand', 'THA', 764, 66),
(212, 'TL', 'TIMOR-LESTE', 'Timor-Leste', NULL, NULL, 670),
(213, 'TG', 'TOGO', 'Togo', 'TGO', 768, 228),
(214, 'TK', 'TOKELAU', 'Tokelau', 'TKL', 772, 690),
(215, 'TO', 'TONGA', 'Tonga', 'TON', 776, 676),
(216, 'TT', 'TRINIDAD AND TOBAGO', 'Trinidad and Tobago', 'TTO', 780, 1868),
(217, 'TN', 'TUNISIA', 'Tunisia', 'TUN', 788, 216),
(218, 'TR', 'TURKEY', 'Turkey', 'TUR', 792, 90),
(219, 'TM', 'TURKMENISTAN', 'Turkmenistan', 'TKM', 795, 7370),
(220, 'TC', 'TURKS AND CAICOS ISLANDS', 'Turks and Caicos Islands', 'TCA', 796, 1649),
(221, 'TV', 'TUVALU', 'Tuvalu', 'TUV', 798, 688),
(222, 'UG', 'UGANDA', 'Uganda', 'UGA', 800, 256),
(223, 'UA', 'UKRAINE', 'Ukraine', 'UKR', 804, 380),
(224, 'AE', 'UNITED ARAB EMIRATES', 'United Arab Emirates', 'ARE', 784, 971),
(225, 'GB', 'UNITED KINGDOM', 'United Kingdom', 'GBR', 826, 44),
(226, 'US', 'UNITED STATES', 'United States', 'USA', 840, 1),
(227, 'UM', 'UNITED STATES MINOR OUTLYING ISLANDS', 'United States Minor Outlying Islands', NULL, NULL, 1),
(228, 'UY', 'URUGUAY', 'Uruguay', 'URY', 858, 598),
(229, 'UZ', 'UZBEKISTAN', 'Uzbekistan', 'UZB', 860, 998),
(230, 'VU', 'VANUATU', 'Vanuatu', 'VUT', 548, 678),
(231, 'VE', 'VENEZUELA', 'Venezuela', 'VEN', 862, 58),
(232, 'VN', 'VIET NAM', 'Viet Nam', 'VNM', 704, 84),
(233, 'VG', 'VIRGIN ISLANDS, BRITISH', 'Virgin Islands, British', 'VGB', 92, 1284),
(234, 'VI', 'VIRGIN ISLANDS, U.S.', 'Virgin Islands, U.s.', 'VIR', 850, 1340),
(235, 'WF', 'WALLIS AND FUTUNA', 'Wallis and Futuna', 'WLF', 876, 681),
(236, 'EH', 'WESTERN SAHARA', 'Western Sahara', 'ESH', 732, 212),
(237, 'YE', 'YEMEN', 'Yemen', 'YEM', 887, 967),
(238, 'ZM', 'ZAMBIA', 'Zambia', 'ZMB', 894, 260),
(239, 'ZW', 'ZIMBABWE', 'Zimbabwe', 'ZWE', 716, 263);

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `doc_id` int(11) NOT NULL,
  `doctor_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `show_type` varchar(100) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `short_degree` text DEFAULT NULL,
  `sort_desc` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci DEFAULT NULL,
  `description` text DEFAULT NULL,
  `home_image` varchar(100) DEFAULT NULL,
  `home_desc` text DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `banner_image` varchar(255) DEFAULT NULL,
  `alt_tag` varchar(150) CHARACTER SET utf8 DEFAULT NULL,
  `education_desc` text DEFAULT NULL,
  `education_detail` text DEFAULT NULL,
  `experience_desc` text DEFAULT NULL,
  `experience_detail` text DEFAULT NULL,
  `title_tag` text CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` text CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` text CHARACTER SET utf8 DEFAULT NULL,
  `canonical_tag` text CHARACTER SET utf8 DEFAULT NULL,
  `url` text CHARACTER SET utf8 DEFAULT NULL,
  `order_by` int(11) DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `doctor_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `doctor_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_certificate`
--

CREATE TABLE `doctor_certificate` (
  `certificate_id` int(11) NOT NULL,
  `certificate_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `certificate_show_type` enum('inside','outside') DEFAULT NULL,
  `doctor_id` int(11) DEFAULT NULL,
  `certificate_name` varchar(255) DEFAULT NULL,
  `certificate_image` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `full_image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `alt_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `certificate_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `certificate_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `order_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_list`
--

CREATE TABLE `doctor_list` (
  `doc_lit_id` int(11) NOT NULL,
  `doctor_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `video_type` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `doctor_id` int(11) NOT NULL,
  `description` text CHARACTER SET utf8 DEFAULT NULL,
  `section1` text CHARACTER SET utf8 DEFAULT NULL,
  `section2` text CHARACTER SET utf8 DEFAULT NULL,
  `banner_image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `video_link` text CHARACTER SET utf8 DEFAULT NULL,
  `alt_tag` varchar(150) CHARACTER SET utf8 DEFAULT NULL,
  `education_name` text CHARACTER SET utf8 DEFAULT NULL,
  `education_college` text CHARACTER SET utf8 DEFAULT NULL,
  `experience_name` text CHARACTER SET utf8 DEFAULT NULL,
  `experience_address` text CHARACTER SET utf8 DEFAULT NULL,
  `title_tag` text CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` text CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` text CHARACTER SET utf8 DEFAULT NULL,
  `canonical_tag` text CHARACTER SET utf8 DEFAULT NULL,
  `url` text CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `doctor_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `doctor_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `faq_id` int(11) NOT NULL,
  `faq_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `question` text CHARACTER SET utf8 DEFAULT NULL,
  `answer` text CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `faq_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `faq_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `footer`
--

CREATE TABLE `footer` (
  `footer_id` int(11) NOT NULL,
  `footer_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `footer_type` varchar(255) DEFAULT NULL,
  `gallery_cat_id` int(11) DEFAULT NULL,
  `footer_name` varchar(255) DEFAULT NULL,
  `footer_logo` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `header_logo` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `header_logo2` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `menu_name` text DEFAULT NULL,
  `alt_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `footer_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `footer_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `order_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `front_menu`
--

CREATE TABLE `front_menu` (
  `mnu_id` int(11) NOT NULL,
  `menu_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `menu_type` varchar(100) DEFAULT NULL,
  `type` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `name` varchar(250) CHARACTER SET utf8 NOT NULL,
  `page_heading` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `urllink` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `dropdown` enum('No','Yes') CHARACTER SET utf8 NOT NULL,
  `menu_banner_image` text CHARACTER SET utf8 DEFAULT NULL,
  `alt_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `title_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` text CHARACTER SET utf8 DEFAULT NULL,
  `canonical` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `menu_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `menu_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `order_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `gallery_id` int(11) NOT NULL,
  `gallery_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `gallery_show_type` enum('inside','outside') DEFAULT NULL,
  `gallery_cat_id` int(11) DEFAULT NULL,
  `gallery_name` varchar(255) DEFAULT NULL,
  `gallery_image` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `full_image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `alt_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `gallery_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `gallery_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gallery_category`
--

CREATE TABLE `gallery_category` (
  `gallery_cat_id` int(11) NOT NULL,
  `gallery_key` int(11) DEFAULT NULL,
  `gallery_cat_name` varchar(255) NOT NULL,
  `gallery_cat_image` varchar(255) DEFAULT NULL,
  `status` enum('active','inactive') NOT NULL,
  `gallery_status` enum('preview','publish') NOT NULL,
  `gallery_attr` longtext DEFAULT NULL,
  `alt_tag` text DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `getaquotes`
--

CREATE TABLE `getaquotes` (
  `quotes_id` int(11) NOT NULL,
  `quotes_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `name` varchar(250) CHARACTER SET utf8 NOT NULL,
  `email` varchar(250) CHARACTER SET utf8 NOT NULL,
  `phone` varchar(100) CHARACTER SET utf8 NOT NULL,
  `message` text CHARACTER SET utf8 DEFAULT NULL,
  `service_name` varchar(255) DEFAULT NULL,
  `quotes` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `google_recaptcha`
--

CREATE TABLE `google_recaptcha` (
  `google_id` int(11) NOT NULL,
  `google_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `site_key` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `secret_key` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `google_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `google_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `home_picture`
--

CREATE TABLE `home_picture` (
  `hom_pic_id` int(11) NOT NULL,
  `home_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `image1_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image1` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image2_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image2` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image3_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image3` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image4_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image4` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `alt_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description` text CHARACTER SET utf8 DEFAULT NULL,
  `title_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `url` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `home_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `home_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `home_technology`
--

CREATE TABLE `home_technology` (
  `hom_tec_id` int(11) NOT NULL,
  `home_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `heading` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `heading2` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image2_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image2` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `alt_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `name1` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `name2` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `name3` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description` text CHARACTER SET utf8 DEFAULT NULL,
  `title_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `url` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `home_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `home_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `master_actions`
--

CREATE TABLE `master_actions` (
  `act_id` int(11) NOT NULL,
  `act_key` varchar(225) DEFAULT NULL,
  `act_name` varchar(225) DEFAULT NULL,
  `act_descr` varchar(225) DEFAULT NULL,
  `is_active` varchar(10) DEFAULT NULL,
  `act_attr` longtext DEFAULT NULL,
  `created_by` varchar(225) DEFAULT NULL,
  `updated_by` varchar(225) DEFAULT NULL,
  `deleted_by` varchar(225) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `master_actions`
--

INSERT INTO `master_actions` (`act_id`, `act_key`, `act_name`, `act_descr`, `is_active`, `act_attr`, `created_by`, `updated_by`, `deleted_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, NULL, 'Add', NULL, '1', NULL, NULL, '1', NULL, '2021-06-29 11:51:43', '2021-07-08 11:17:51', NULL),
(2, NULL, 'Edit', NULL, '1', NULL, NULL, NULL, NULL, '2021-06-29 11:51:43', '2021-06-29 11:51:43', NULL),
(3, NULL, 'View', NULL, '1', NULL, NULL, NULL, NULL, '2021-06-29 11:51:43', '2021-06-29 11:51:43', NULL),
(4, '1625304184.478260e02c7874bfa', 'Delete', 'Delete Description', '1', NULL, '1', '1', NULL, '2021-07-03 03:53:04', '2021-07-03 03:55:44', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `master_menu`
--

CREATE TABLE `master_menu` (
  `mnu_id` int(11) NOT NULL,
  `mnu_key` varchar(225) DEFAULT NULL,
  `mnu_name` varchar(255) DEFAULT NULL,
  `mnu_url` varchar(45) DEFAULT NULL,
  `mnu_ser_type` varchar(100) DEFAULT NULL,
  `mnu_type` enum('backend','frontend') NOT NULL,
  `mnu_dropdown` enum('No','Yes') NOT NULL,
  `mnu_apps_id` varchar(225) DEFAULT NULL COMMENT 'Not For use',
  `mnu_icon` varchar(225) DEFAULT NULL,
  `mnu_order` int(11) NOT NULL DEFAULT 0,
  `mnu_attr` varchar(45) DEFAULT NULL,
  `mnu_sub_type` varchar(100) DEFAULT NULL,
  `mnu_status` enum('active','inactive') NOT NULL,
  `created_by` varchar(225) DEFAULT NULL,
  `updated_by` varchar(225) DEFAULT NULL,
  `deleted_by` varchar(225) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `master_menu`
--

INSERT INTO `master_menu` (`mnu_id`, `mnu_key`, `mnu_name`, `mnu_url`, `mnu_ser_type`, `mnu_type`, `mnu_dropdown`, `mnu_apps_id`, `mnu_icon`, `mnu_order`, `mnu_attr`, `mnu_sub_type`, `mnu_status`, `created_by`, `updated_by`, `deleted_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '1625144697.284760ddbd7945817', 'Sites', '#sites', 'health', 'frontend', 'Yes', NULL, 'format_list_bulleted', 3, NULL, NULL, 'active', '1', '1', NULL, '2021-07-01 07:34:57', '2021-09-22 05:04:55', NULL),
(2, '1625144720.671460ddbd90a3eba', 'Contents', '#contents', 'health', 'frontend', 'Yes', NULL, 'format_list_bulleted', 0, NULL, NULL, 'inactive', '1', '1', NULL, '2021-07-01 07:35:20', '2021-08-27 07:12:12', NULL),
(3, '1625144744.071460ddbda811715', 'User', '#user', 'health', 'frontend', 'Yes', NULL, 'format_list_bulleted', 1, NULL, NULL, 'active', '1', NULL, NULL, '2021-07-01 07:35:44', '2021-08-27 07:45:49', NULL),
(4, '1625144777.457660ddbdc96fb86', 'Gateways', '#gateways', 'health', 'frontend', 'Yes', NULL, 'format_list_bulleted', 4, NULL, NULL, 'active', '1', NULL, NULL, '2021-07-01 07:36:17', '2021-08-27 07:46:28', NULL),
(5, '1625558804.218760e40f1435631', 'Role', '#role', 'health', 'frontend', 'Yes', NULL, 'format_list_bulleted', 2, NULL, NULL, 'active', '1', NULL, NULL, '2021-07-06 08:06:44', '2021-08-27 07:45:59', NULL),
(6, '1625742857.166160e6de09288ea', 'Contact', 'contact-list', 'health', 'backend', 'Yes', NULL, 'format_list_bulleted', 14, NULL, NULL, 'inactive', '1', NULL, NULL, '2021-07-08 11:14:17', '2021-08-27 07:12:22', NULL),
(7, '1626951735.204960f9503732083', 'Appointment', '#appointment', 'health', 'backend', 'Yes', NULL, 'appointment-icon', 17, NULL, NULL, 'active', '1', '1', NULL, '2021-07-22 11:02:15', '2021-11-22 13:09:58', NULL),
(8, '1627709864.84476104e1a8ce3cd', 'Services', '#', 'health', 'backend', 'Yes', NULL, 'fa fa-server', 7, NULL, NULL, 'active', '1', '1', NULL, '2021-07-31 05:37:44', '2021-11-22 12:36:48', NULL),
(9, '1630040758.3187612872b64dd0e', 'Result', '#', 'health', 'backend', 'Yes', NULL, 'fa fa-server', 8, NULL, NULL, 'active', '1', NULL, NULL, '2021-08-27 05:05:58', '2021-11-22 12:37:15', NULL),
(10, '1630040867.703861287323abd0e', 'Video', '#', 'health', 'backend', 'Yes', NULL, 'fa fa-server', 9, NULL, NULL, 'active', '1', NULL, NULL, '2021-08-27 05:07:47', '2021-11-22 12:37:34', NULL),
(11, '1630040930.869461287362d440e', 'Technology', 'technology', 'health', 'backend', 'No', NULL, 'fa fa-camera-retro', 11, NULL, NULL, 'active', '1', NULL, NULL, '2021-08-27 05:08:50', '2021-09-10 12:02:47', NULL),
(12, '1630040959.45976128737f703a6', 'Gallery', 'gallery', 'health', 'backend', 'No', NULL, 'fa fa-camera-retro', 10, NULL, NULL, 'active', '1', '1', NULL, '2021-08-27 05:09:19', '2021-11-22 12:37:52', NULL),
(13, '1630040992.1198612873a01d3fb', 'Testimonial', 'testimonials', 'health', 'backend', 'Yes', NULL, 'fa fa-rss-square', 11, NULL, NULL, 'active', '1', NULL, NULL, '2021-08-27 05:09:52', '2021-11-22 12:38:21', NULL),
(14, '1630041026.9614612873c2eab9e', 'Blog', 'blogs', 'health', 'backend', 'No', NULL, 'fa fa-rss-square', 12, NULL, NULL, 'active', '1', NULL, NULL, '2021-08-27 05:10:26', '2021-11-22 12:38:35', NULL),
(15, '1630041059.7527612873e3b7c75', 'Press & Media', '#', 'health', 'backend', 'Yes', NULL, 'fa fa-server', 13, NULL, NULL, 'active', '1', NULL, NULL, '2021-08-27 05:10:59', '2021-11-22 12:41:22', NULL),
(16, '1630041087.6085612873ff94914', 'Contact Us', '#', 'health', 'backend', 'Yes', NULL, 'fa fa-th', 16, NULL, NULL, 'active', '1', '1', NULL, '2021-08-27 05:11:27', '2021-11-22 13:11:31', NULL),
(17, '1630043453.318361287d3d4db4c', 'Dashboard', 'dashboard', 'health', 'backend', 'No', NULL, 'fa fa-dashboard', 1, NULL, NULL, 'active', '1', NULL, NULL, '2021-08-27 05:50:53', '2021-08-27 07:08:45', NULL),
(18, '1631184262.54966139e58686305', 'Menu', '#', 'health', 'backend', 'Yes', NULL, 'fa fa-server', 6, NULL, NULL, 'active', '1', '1', NULL, '2021-09-09 10:44:22', '2021-11-22 12:36:31', NULL),
(19, '1631275263.2799613b48ff44544', 'Seo', 'seo', 'health', 'backend', 'Yes', NULL, 'fa fa-server', 5, NULL, NULL, 'active', '1', NULL, NULL, '2021-09-10 12:01:03', '2021-11-22 12:36:13', NULL),
(20, '1631861052.81976144393cc81f1', 'site menu', 'site-url', 'health', 'frontend', 'Yes', NULL, 'format_list_bulleted', 0, NULL, NULL, 'active', '1', '1', NULL, '2021-09-17 06:44:12', '2021-09-22 04:53:59', NULL),
(21, '1637564266.4874619b3f6a76fc2', 'Home', '#', 'health', 'backend', 'Yes', NULL, 'fa fa-book', 2, NULL, NULL, 'active', '1', NULL, NULL, '2021-11-22 12:27:46', '2021-11-22 12:35:03', NULL),
(22, '1637564303.5645619b3f8f89d1e', 'About', '#', 'health', 'backend', 'Yes', NULL, 'fa fa-book', 3, NULL, NULL, 'active', '1', '1', NULL, '2021-11-22 12:28:23', '2022-05-11 12:39:34', NULL),
(23, '1637564343.2272619b3fb73775c', 'Doctor', '#', 'health', 'backend', 'Yes', NULL, 'fa fa-book', 4, NULL, NULL, 'active', '1', NULL, NULL, '2021-11-22 12:29:03', '2021-11-22 12:35:38', NULL),
(24, '1637564408.0956619b3ff8175a0', 'Footer', '#', 'health', 'backend', 'Yes', NULL, 'fa fa-book', 15, NULL, NULL, 'active', '1', NULL, NULL, '2021-11-22 12:30:08', '2021-11-22 13:09:46', NULL),
(25, '1637564451.9812619b4023ef8af', 'Logo', 'logo', 'ecommerce', 'backend', 'No', NULL, 'fa fa-book', 0, NULL, NULL, 'active', '1', '1', '1', '2021-11-22 12:30:51', '2021-11-22 12:32:17', '2021-11-22 12:32:17'),
(26, '1637566357.7297619b4795b228d', 'Address List', 'address-list', 'health', 'backend', 'No', NULL, 'fa fa-book', 14, NULL, NULL, 'active', '1', NULL, NULL, '2021-11-22 13:02:37', '2021-11-22 13:03:44', NULL),
(27, '1642749855.146861ea5f9f23d8e', 'Setup & Configuration', '#', 'health', 'backend', 'Yes', NULL, 'fa fa-server', 18, NULL, NULL, 'active', '1', NULL, NULL, '2022-01-21 07:24:15', '2022-01-21 07:27:19', NULL),
(28, '1630041026.9614612873c2eab9e', 'Case Studies', 'case-studies', 'health', 'backend', 'No', NULL, 'fa fa-rss-square', 12, NULL, NULL, 'active', '1', NULL, NULL, '2021-08-27 05:10:26', '2021-11-22 12:38:35', NULL),
(29, '1630041026.96146s8873c2eab9e', 'Users', 'case-studies', 'health', 'backend', 'Yes', NULL, 'fa fa-rss-square', 12, NULL, NULL, 'active', '1', NULL, NULL, '2021-08-27 05:10:26', '2021-11-22 12:38:35', NULL),
(30, '1630041026.96146s8873c2eab9e', 'Manage Menu', 'menu', 'health', 'backend', 'Yes', NULL, 'fa fa-rss-square', 12, NULL, NULL, 'active', '1', NULL, NULL, '2021-08-27 05:10:26', '2021-11-22 12:38:35', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `master_operations`
--

CREATE TABLE `master_operations` (
  `op_id` int(10) UNSIGNED NOT NULL,
  `op_key` varchar(225) DEFAULT NULL,
  `op_apps_id` int(11) DEFAULT NULL COMMENT 'Not For use',
  `op_name` varchar(255) DEFAULT NULL,
  `op_ser_type` varchar(100) DEFAULT NULL,
  `op_type` enum('frontend','backend') NOT NULL,
  `op_title` varchar(50) DEFAULT NULL,
  `op_link` text DEFAULT NULL,
  `op_icon_link` text DEFAULT NULL,
  `op_text_style` text DEFAULT NULL,
  `op_status` enum('active','inactive') NOT NULL,
  `op_attr` longtext DEFAULT NULL,
  `op_view_order` int(10) UNSIGNED DEFAULT 0,
  `op_sub_type` varchar(100) DEFAULT NULL,
  `created_by` varchar(225) DEFAULT NULL,
  `updated_by` varchar(225) DEFAULT NULL,
  `deleted_by` varchar(225) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `master_operations`
--

INSERT INTO `master_operations` (`op_id`, `op_key`, `op_apps_id`, `op_name`, `op_ser_type`, `op_type`, `op_title`, `op_link`, `op_icon_link`, `op_text_style`, `op_status`, `op_attr`, `op_view_order`, `op_sub_type`, `created_by`, `updated_by`, `deleted_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '1625144851.705960ddbe13ac55c', NULL, 'Add Sites', 'health', 'frontend', NULL, 'add-sites', 'sites-icon', NULL, 'inactive', NULL, 0, NULL, '1', '1', NULL, '2021-07-01 07:37:31', '2021-09-17 07:05:08', NULL),
(2, '1625144879.904960ddbe2fdceec', NULL, 'View Sites', 'health', 'frontend', NULL, 'siteview', 'view-icon', NULL, 'active', NULL, 1, NULL, '1', '1', NULL, '2021-07-01 07:37:59', '2021-08-31 04:47:40', NULL),
(3, '1625144909.013460ddbe4d0342d', NULL, 'Add Users', 'health', 'frontend', NULL, 'add-register', 'user-new-icon', NULL, 'inactive', NULL, 0, NULL, '1', '1', NULL, '2021-07-01 07:38:29', '2021-08-27 07:14:23', NULL),
(4, '1625144934.285660ddbe6645bb4', NULL, 'View User', 'health', 'frontend', NULL, 'viewregister', 'user-icon', NULL, 'active', NULL, 1, NULL, '1', '1', NULL, '2021-07-01 07:38:54', '2021-08-27 07:18:27', NULL),
(5, '1625144968.994860ddbe88f2e04', NULL, 'Add Content', 'health', 'frontend', NULL, 'add-content', 'content-icon', NULL, 'inactive', NULL, 1, NULL, '1', '1', NULL, '2021-07-01 07:39:28', '2021-08-27 07:07:08', NULL),
(6, '1625145009.82760ddbeb1c9eb5', NULL, 'View Content', 'health', 'frontend', NULL, 'view-content', 'content-icon', NULL, 'inactive', NULL, 0, NULL, '1', NULL, NULL, '2021-07-01 07:40:09', '2021-08-27 07:07:55', NULL),
(7, '1625145037.808460ddbecdc55c5', NULL, 'Payment gateway', 'health', 'frontend', NULL, '/pg', 'pg-icon', NULL, 'active', NULL, 1, NULL, '1', NULL, NULL, '2021-07-01 07:40:37', '2021-08-27 07:15:10', NULL),
(8, '1625145060.539260ddbee483a48', NULL, 'SMS Gateway', 'health', 'frontend', NULL, '/smsgateway', 'smsgateway-icon', NULL, 'active', NULL, 3, NULL, '1', NULL, NULL, '2021-07-01 07:41:00', '2021-08-27 07:15:32', NULL),
(9, '1625145084.204160ddbefc31d3f', NULL, 'Email Gateway', 'health', 'frontend', NULL, '/email-gateway', 'email-gateway-icon', NULL, 'active', NULL, 2, NULL, '1', NULL, NULL, '2021-07-01 07:41:24', '2021-08-27 07:15:14', NULL),
(10, '1625145112.984560ddbf18f05dc', NULL, 'WhatsApp Gateway', 'health', 'frontend', NULL, '/wpgateway', 'wpgateway-icon', NULL, 'active', NULL, 4, NULL, '1', NULL, NULL, '2021-07-01 07:41:52', '2021-08-27 07:18:31', NULL),
(11, '1625558878.527760e40f5e80d52', NULL, 'Add Role', 'health', 'frontend', NULL, 'add-role', 'add-role-icon', NULL, 'inactive', NULL, 0, NULL, '1', NULL, NULL, '2021-07-06 08:07:58', '2021-08-27 07:19:07', NULL),
(12, '1625558913.660860e40f81a151d', NULL, 'View Role', 'health', 'frontend', NULL, 'role', 'view-role-icon', NULL, 'active', NULL, 1, NULL, '1', NULL, NULL, '2021-07-06 08:08:33', '2021-08-27 07:17:54', NULL),
(13, '1625558998.472960e40fd673772', NULL, 'Permission Menu', 'health', 'frontend', NULL, 'role-config', 'permission-menu-icon', NULL, 'active', NULL, 2, NULL, '1', NULL, NULL, '2021-07-06 08:09:58', '2021-08-27 07:20:14', NULL),
(14, '1625742911.474160e6de3f73c24', NULL, 'Contact List', 'health', 'backend', NULL, 'Contact-list', 'contact-icon', NULL, 'inactive', NULL, 1, NULL, '1', NULL, '1', '2021-07-08 11:15:11', '2021-11-22 13:12:22', '2021-11-22 13:12:22'),
(15, '1626951790.170160f9506e29856', NULL, 'View Appointment', 'health', 'backend', NULL, 'appointment', 'view-appointment-icon', NULL, 'active', NULL, 1, NULL, '1', '1', NULL, '2021-07-22 11:03:10', '2021-09-13 06:04:48', NULL),
(16, '1627709928.54156104e1e884356', NULL, 'View Category', 'health', 'backend', NULL, 'service-category', 'icon-add-pages', NULL, 'active', NULL, 1, NULL, '1', '1', NULL, '2021-07-31 05:38:48', '2021-08-27 07:16:30', NULL),
(17, '1627709968.56926104e2108af9d', NULL, 'View Service', 'health', 'backend', NULL, 'service', 'icon-view-pages', NULL, 'active', NULL, 6, NULL, '1', '1', NULL, '2021-07-31 05:39:28', '2021-10-18 09:43:06', NULL),
(18, '1630041850.4631612876fa71109', NULL, 'View Service FAQ', 'health', 'backend', NULL, 'service-faq', 'fa fa-server', NULL, 'active', NULL, 7, NULL, '1', NULL, NULL, '2021-08-27 05:24:10', '2021-10-18 09:43:13', NULL),
(19, '1630041990.773761287786bce6e', NULL, 'Result Category', 'health', 'backend', NULL, 'service-result-category', 'fa fa-server', NULL, 'active', NULL, 1, NULL, '1', NULL, NULL, '2021-08-27 05:26:30', '2021-08-27 07:17:05', NULL),
(20, '1630042087.583612877e78e550', NULL, 'Result Service', 'health', 'backend', NULL, 'result-service', 'fa fa-server', NULL, 'active', NULL, 6, NULL, '1', NULL, NULL, '2021-08-27 05:28:07', '2021-10-22 05:12:26', NULL),
(21, '1630042115.5132612878037d498', NULL, 'Result Inner', 'health', 'backend', NULL, 'service-result-inner', '#', NULL, 'active', NULL, 7, NULL, '1', NULL, NULL, '2021-08-27 05:28:35', '2021-10-22 05:12:29', NULL),
(22, '1630042148.1186612878241cf2d', NULL, 'Video Category', 'health', 'backend', NULL, 'service-video-category', '#', NULL, 'active', NULL, 1, NULL, '1', NULL, NULL, '2021-08-27 05:29:08', '2021-08-27 07:15:40', NULL),
(23, '1630042178.870561287842d4859', NULL, 'Video Service', 'health', 'backend', NULL, 'video-service', '#', NULL, 'active', NULL, 6, NULL, '1', NULL, NULL, '2021-08-27 05:29:38', '2021-10-22 05:18:55', NULL),
(24, '1630042206.30296128785e49f54', NULL, 'Video Inner', 'health', 'backend', NULL, 'service-video-inner', '#', NULL, 'active', NULL, 7, NULL, '1', NULL, NULL, '2021-08-27 05:30:06', '2021-10-22 05:18:58', NULL),
(25, '1630042242.40056128788261c97', NULL, 'Press & Media Category', 'health', 'backend', NULL, 'pressmedia-category', '#', NULL, 'active', NULL, 1, NULL, '1', NULL, NULL, '2021-08-27 05:30:42', '2021-08-27 07:14:47', NULL),
(26, '1630042268.30926128789c4b7d6', NULL, 'Press & Media Inner', 'health', 'backend', NULL, 'pressmedia', '#', NULL, 'active', NULL, 2, NULL, '1', NULL, NULL, '2021-08-27 05:31:08', '2021-08-27 07:14:51', NULL),
(27, '1630042409.49896128792979ce3', NULL, 'Contact List', 'health', 'backend', NULL, 'contact', '#', NULL, 'active', NULL, 1, NULL, '1', '1', NULL, '2021-08-27 05:33:29', '2021-11-22 13:12:44', NULL),
(28, '1630385440.0649612db5200fd9c', NULL, 'Add Pages', 'health', 'frontend', NULL, 'add-pages', 'add-page', NULL, 'active', NULL, 2, NULL, '1', NULL, NULL, '2021-08-31 04:50:40', '2021-09-01 07:21:51', NULL),
(29, '1631184323.29086139e5c347009', NULL, 'Primary Menu', 'health', 'backend', NULL, 'primary-menu', 'primary-menu', NULL, 'active', NULL, 1, NULL, '1', NULL, NULL, '2021-09-09 10:45:23', '2021-10-29 06:18:15', NULL),
(30, '1631184367.07326139e5ef11e12', NULL, 'Secondary Menu', 'health', 'backend', NULL, 'secondary-menu', 'secondary-menu', NULL, 'active', NULL, 2, NULL, '1', NULL, NULL, '2021-09-09 10:46:07', '2021-10-29 06:18:19', NULL),
(31, '1631184399.65866139e60fa0cb2', NULL, 'Third Menu', 'health', 'backend', NULL, 'third-menu', 'third-menu', NULL, 'active', NULL, 3, NULL, '1', NULL, NULL, '2021-09-09 10:46:39', '2021-10-29 06:18:24', NULL),
(32, '1631861901.241561443c8d3af8a', NULL, 'menu Oper', 'health', 'frontend', NULL, 'menu-oper', 'menu-oper', NULL, 'active', NULL, 0, NULL, '1', NULL, NULL, '2021-09-17 06:58:21', '2021-09-17 06:58:21', NULL),
(33, '1634368578.8816616a7c42d73e8', NULL, 'Permission Site Backend Menu', 'health', 'frontend', NULL, 'permission-site-backend-menu', 'format_list_bulleted', NULL, 'active', NULL, 2, NULL, '1', NULL, NULL, '2021-10-16 07:16:18', '2021-10-16 07:17:30', NULL),
(34, '1634386166.2226616ac0f63657c', NULL, 'View Category', 'health', 'backend', NULL, 'view-category', 'fa fa-th', NULL, 'active', NULL, 0, NULL, '1', NULL, NULL, '2021-10-16 12:09:26', '2021-10-16 12:09:26', NULL),
(35, '1634386371.3865616ac1c35e5ea', NULL, 'View Sub Category', 'health', 'backend', NULL, 'view-sub-category', 'fa fa-th', NULL, 'active', NULL, 0, NULL, '1', NULL, NULL, '2021-10-16 12:12:51', '2021-10-16 12:12:51', NULL),
(36, '1634549759.1259616d3fff1ebc2', NULL, 'Second Category', 'health', 'backend', NULL, 'second-category', 'fa fa-server', NULL, 'active', NULL, 2, NULL, '1', NULL, NULL, '2021-10-18 09:35:59', '2021-10-18 09:41:35', NULL),
(37, '1634549788.1974616d401c302ef', NULL, 'Third Category', 'health', 'backend', NULL, 'third-category', 'fa fa-server', NULL, 'active', NULL, 3, NULL, '1', NULL, NULL, '2021-10-18 09:36:28', '2021-10-18 09:41:39', NULL),
(38, '1634549912.1826616d40982c965', NULL, 'Fourth Category', 'health', 'backend', NULL, 'fourth-category', 'fa fa-server', NULL, 'active', NULL, 4, NULL, '1', NULL, NULL, '2021-10-18 09:38:32', '2021-10-18 09:41:46', NULL),
(39, '1634549956.5601616d40c488c1b', NULL, 'Fifth Category', 'health', 'backend', NULL, 'fifth-category', 'fa fa-server', NULL, 'active', NULL, 5, NULL, '1', NULL, NULL, '2021-10-18 09:39:16', '2021-10-18 09:41:52', NULL),
(40, '1634879292.92066172473ce0c2c', NULL, 'Second Result Category', 'health', 'backend', NULL, 'second-result-category', 'fa fa-server', NULL, 'active', NULL, 2, NULL, '1', NULL, NULL, '2021-10-22 05:08:12', '2021-10-22 05:12:06', NULL),
(41, '1634879335.493561724767787bf', NULL, 'Third Result Category', 'health', 'backend', NULL, 'third-result-category', 'fa fa-server', NULL, 'active', NULL, 3, NULL, '1', NULL, NULL, '2021-10-22 05:08:55', '2021-10-22 05:12:09', NULL),
(42, '1634879373.73046172478db24f9', NULL, 'Fourth Result Category', 'health', 'backend', NULL, 'fourth-result-category', 'fa fa-server', NULL, 'active', NULL, 4, NULL, '1', NULL, NULL, '2021-10-22 05:09:33', '2021-10-22 05:12:15', NULL),
(43, '1634879499.13656172480b2156d', NULL, 'Fifth Result Category', 'health', 'backend', NULL, 'fifth-result-category', 'fa fa-server', NULL, 'active', NULL, 5, NULL, '1', NULL, NULL, '2021-10-22 05:11:39', '2021-10-22 05:12:20', NULL),
(44, '1634879625.5106617248897cabd', NULL, 'Second Video Category', 'health', 'backend', NULL, 'second-video-category', 'fa fa-server', NULL, 'active', NULL, 2, NULL, '1', NULL, NULL, '2021-10-22 05:13:45', '2021-10-22 05:18:35', NULL),
(45, '1634879704.81617248d8c5c10', NULL, 'Third Video Category', 'health', 'backend', NULL, 'third-video-category', 'fa fa-server', NULL, 'active', NULL, 3, NULL, '1', NULL, NULL, '2021-10-22 05:15:04', '2021-10-22 05:18:40', NULL),
(46, '1634879740.2847617248fc45832', NULL, 'Fourth Video Category', 'health', 'backend', NULL, 'fourth-video-category', 'fa fa-server', NULL, 'active', NULL, 4, NULL, '1', '1', NULL, '2021-10-22 05:15:40', '2021-10-22 05:18:44', NULL),
(47, '1634879774.53796172491e83544', NULL, 'Fifth Video Category', 'health', 'backend', NULL, 'fifth-video-category', 'fa fa-server', NULL, 'active', NULL, 5, NULL, '1', '1', NULL, '2021-10-22 05:16:14', '2021-10-22 05:18:47', NULL),
(48, '1635411225.2791617a651944213', NULL, 'Fourth Menu', 'health', 'backend', NULL, 'fourth-menu', 'fa fa-server', NULL, 'active', NULL, 4, NULL, '1', NULL, NULL, '2021-10-28 08:53:45', '2021-10-29 06:18:31', NULL),
(49, '1635411253.9054617a6535dd0dd', NULL, 'Fifth Menu', 'health', 'backend', NULL, 'fifth-menu', 'fa fa-server', NULL, 'active', NULL, 5, NULL, '1', NULL, NULL, '2021-10-28 08:54:13', '2021-10-29 06:18:35', NULL),
(50, '1637565297.068619b4371109af', NULL, 'Slider', 'health', 'backend', NULL, 'slider', '#', NULL, 'active', NULL, 2, NULL, '1', NULL, NULL, '2021-11-22 12:44:57', '2021-11-22 13:07:23', NULL),
(51, '1637565317.9257619b4385e2000', NULL, 'Logo', 'health', 'backend', NULL, 'logo-list', '#', NULL, 'active', NULL, 1, NULL, '1', '1', NULL, '2021-11-22 12:45:17', '2021-11-22 16:25:00', NULL),
(52, '1637565383.9917619b43c7f21e6', NULL, 'About List', 'health', 'backend', NULL, 'aboutlist', '#', NULL, 'active', NULL, 1, NULL, '1', '1', NULL, '2021-11-22 12:46:23', '2022-05-12 09:24:11', NULL),
(53, '1637565423.6318619b43ef9a425', NULL, 'Membership', 'health', 'backend', NULL, 'membership', '#', NULL, 'active', NULL, 2, NULL, '1', NULL, NULL, '2021-11-22 12:47:03', '2021-11-22 13:07:49', NULL),
(54, '1637565450.3107619b440a4bd9a', NULL, 'Doctor List', 'health', 'backend', NULL, 'doctor-list', '#', NULL, 'active', NULL, 1, NULL, '1', NULL, NULL, '2021-11-22 12:47:30', '2021-11-22 13:08:03', NULL),
(55, '1637565489.9669619b4431ec0f4', NULL, 'Doctor Certificates', 'health', 'backend', NULL, 'doctor-certificate', '#', NULL, 'active', NULL, 2, NULL, '1', NULL, NULL, '2021-11-22 12:48:09', '2021-11-22 13:08:08', NULL),
(56, '1637565916.9032619b45dcdc812', NULL, 'Contact Details', 'health', 'backend', NULL, 'contact-list', '#', NULL, 'active', NULL, 0, NULL, '1', NULL, '1', '2021-11-22 12:55:16', '2021-11-22 13:01:20', '2021-11-22 13:01:20'),
(57, '1637565972.0102619b4614027fb', NULL, 'Footer menu', 'health', 'backend', NULL, 'footer-menu', '#', NULL, 'active', NULL, 1, NULL, '1', '1', NULL, '2021-11-22 12:56:12', '2021-11-22 13:08:20', NULL),
(58, '1642749966.668461ea600ea330a', NULL, 'Google Recaptcha', 'health', 'backend', NULL, 'google-recaptcha', 'fa fa-server', NULL, 'active', NULL, 0, NULL, '1', NULL, NULL, '2022-01-21 07:26:06', '2022-01-21 07:26:06', NULL),
(59, '1637565972.0102619b4614027fb', NULL, 'Written Testimonials', 'health', 'backend', NULL, 'testimonials', '#', NULL, 'active', NULL, 1, NULL, '1', '1', NULL, '2021-11-22 12:56:12', '2021-11-22 13:08:20', NULL),
(60, '1642749966.668461ea600ea330a', NULL, 'Video Testimonials', 'health', 'backend', NULL, 'video-testimonials', 'fa fa-server', NULL, 'active', NULL, 0, NULL, '1', NULL, NULL, '2022-01-21 07:26:06', '2022-01-21 07:26:06', NULL),
(61, '1642749966.668461ea600ea375d', NULL, 'Get A Quote', 'health', 'backend', NULL, 'getaquotes', '#', NULL, 'active', NULL, 2, NULL, NULL, NULL, NULL, '2022-01-21 07:26:06', '2022-01-21 07:26:06', NULL),
(62, '1642749966.66846184wea600ea375d', NULL, 'User List', 'health', 'backend', NULL, 'user', '#', NULL, 'active', NULL, 2, NULL, NULL, NULL, NULL, '2022-01-21 07:26:06', '2022-01-21 07:26:06', NULL),
(63, '1642749966.66846184wea600ea375d', NULL, 'Role List', 'health', 'backend', NULL, 'role', '#', NULL, 'active', NULL, 2, NULL, NULL, NULL, NULL, '2022-01-21 07:26:06', '2022-01-21 07:26:06', NULL),
(64, '1642749966.668461d284wea600ea375d', NULL, 'Permission Menu', 'health', 'backend', NULL, 'permission', '#', NULL, 'active', NULL, 2, NULL, NULL, NULL, NULL, '2022-01-21 07:26:06', '2022-01-21 07:26:06', NULL),
(65, '1642749966.668461d284wea600ea375d', NULL, 'Operation', 'health', 'backend', NULL, 'operation', '#', NULL, 'active', NULL, 2, NULL, NULL, NULL, NULL, '2022-01-21 07:26:06', '2022-01-21 07:26:06', NULL),
(66, '1642749966.668461d284wea600ea375d', NULL, 'Manage Menu Operation', 'health', 'backend', NULL, 'menu-operation', '#', NULL, 'active', NULL, 2, NULL, NULL, NULL, NULL, '2022-01-21 07:26:06', '2022-01-21 07:26:06', NULL),
(67, '1642749966.668461d284wea600ea375d', NULL, 'Seo List', 'health', 'backend', NULL, 'seo', '#', NULL, 'active', NULL, 2, NULL, NULL, NULL, NULL, '2022-01-21 07:26:06', '2022-01-21 07:26:06', NULL),
(68, '1642749966.668461d284wea600ea375d', NULL, 'Redirect', 'health', 'backend', NULL, 'redirect', '#', NULL, 'active', NULL, 2, NULL, NULL, NULL, NULL, '2022-01-21 07:26:06', '2022-01-21 07:26:06', NULL),
(69, '1642749966.668461d284wea600ea375d', NULL, 'Sitemap', 'health', 'backend', NULL, 'sitemap', '#', NULL, 'active', NULL, 2, NULL, NULL, NULL, NULL, '2022-01-21 07:26:06', '2022-01-21 07:26:06', NULL),
(70, '1642749966.668461d284wea600ea375d', NULL, 'Robots.txt', 'health', 'backend', NULL, 'robots', '#', NULL, 'active', NULL, 2, NULL, NULL, NULL, NULL, '2022-01-21 07:26:06', '2022-01-21 07:26:06', NULL),
(71, '1642749966.668461d284wea600ea375d', NULL, 'Menu', 'health', 'backend', NULL, 'menu', '#', NULL, 'active', NULL, 2, NULL, NULL, NULL, NULL, '2022-01-21 07:26:06', '2022-01-21 07:26:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `master_plan`
--

CREATE TABLE `master_plan` (
  `plan_id` int(11) NOT NULL,
  `plan_key` varchar(225) DEFAULT NULL,
  `plan_name` varchar(100) DEFAULT NULL,
  `plan_description` varchar(255) DEFAULT NULL,
  `plan_price` varchar(255) DEFAULT NULL,
  `plan_attr` longtext DEFAULT NULL,
  `plan_isactive` char(10) DEFAULT NULL,
  `created_by` varchar(225) DEFAULT NULL,
  `updated_by` varchar(225) DEFAULT NULL,
  `deleted_by` varchar(225) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `master_plan`
--

INSERT INTO `master_plan` (`plan_id`, `plan_key`, `plan_name`, `plan_description`, `plan_price`, `plan_attr`, `plan_isactive`, `created_by`, `updated_by`, `deleted_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '1633002609.38656155a4715e5d2', 'Elite Package', 'With all communication Gateways included', '15,500', NULL, '1', '1', NULL, NULL, '2021-09-30 11:50:09', '2021-09-30 11:50:09', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `master_role`
--

CREATE TABLE `master_role` (
  `role_id` int(11) NOT NULL,
  `role_key` varchar(225) DEFAULT NULL,
  `role_name` varchar(60) DEFAULT NULL,
  `role_apps_id` int(11) DEFAULT NULL COMMENT 'Not For use',
  `role_org_id` bigint(20) DEFAULT NULL,
  `role_status` tinyint(1) DEFAULT 1,
  `role_desc` longtext DEFAULT NULL,
  `role_attr` longtext DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  `deleted_by` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `master_role`
--

INSERT INTO `master_role` (`role_id`, `role_key`, `role_name`, `role_apps_id`, `role_org_id`, `role_status`, `role_desc`, `role_attr`, `created_by`, `updated_by`, `deleted_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '1652254549.9333627b6755e3de0', 'Super Admin', NULL, 1, 1, 'Super Admin', NULL, '1', '1', NULL, '2022-05-11 07:35:49', '2022-05-11 07:38:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `master_users`
--

CREATE TABLE `master_users` (
  `usr_id` int(10) UNSIGNED NOT NULL,
  `usr_key` varchar(225) DEFAULT NULL,
  `usr_email` varchar(225) DEFAULT NULL,
  `usr_password` text DEFAULT NULL,
  `usr_first_name` varchar(255) DEFAULT NULL,
  `usr_last_name` varchar(225) DEFAULT NULL,
  `usr_mobile` varchar(45) DEFAULT NULL,
  `usr_image` varchar(225) DEFAULT NULL,
  `usr_attr` longtext DEFAULT NULL,
  `usr_org_id` bigint(20) DEFAULT NULL,
  `usr_mode` tinyint(1) DEFAULT NULL,
  `usr_reporting_to` int(11) DEFAULT NULL,
  `created_by` varchar(225) DEFAULT NULL,
  `updated_by` varchar(225) DEFAULT NULL,
  `deleted_by` varchar(225) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `master_users`
--

INSERT INTO `master_users` (`usr_id`, `usr_key`, `usr_email`, `usr_password`, `usr_first_name`, `usr_last_name`, `usr_mobile`, `usr_image`, `usr_attr`, `usr_org_id`, `usr_mode`, `usr_reporting_to`, `created_by`, `updated_by`, `deleted_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, NULL, 'info@digilantern.com', '21232f297a57a5a743894a0e4a801fc3', 'DigiLantern', NULL, NULL, NULL, NULL, 1, 1, 1, NULL, NULL, NULL, '2022-05-11 09:53:07', '2022-05-11 09:53:07', NULL),
(2, NULL, 'info@aestiva.in', '202cb962ac59075b964b07152d234b70', 'Admin', 'K', '9655444445', NULL, NULL, 1, 1, 1, '1', NULL, NULL, '2022-05-11 10:20:14', '2022-05-11 10:20:14', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `membership`
--

CREATE TABLE `membership` (
  `mem_id` int(11) NOT NULL,
  `member_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `image` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `full_image` varchar(255) DEFAULT NULL,
  `alt_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `member_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `member_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `notification_type`
--

CREATE TABLE `notification_type` (
  `not_id` int(11) NOT NULL,
  `not_key` varchar(225) DEFAULT NULL,
  `not_name` varchar(225) DEFAULT NULL,
  `not_template` text DEFAULT NULL,
  `not_attr` longtext DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ourservice`
--

CREATE TABLE `ourservice` (
  `our_id` int(11) NOT NULL,
  `our_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `type` enum('service','exclusive') CHARACTER SET utf8 NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `thumbnail` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `after_image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `before_image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `videolink` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description` text CHARACTER SET utf8 DEFAULT NULL,
  `alt_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `title_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `url` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `our_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `our_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `press_media`
--

CREATE TABLE `press_media` (
  `press_id` int(11) NOT NULL,
  `press_key` varchar(225) DEFAULT NULL,
  `press_cat_id` int(11) NOT NULL DEFAULT 0,
  `name` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `dr_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `dr_description` text CHARACTER SET utf8 DEFAULT NULL,
  `reference` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `short_desc` text CHARACTER SET utf8 DEFAULT NULL,
  `description` text CHARACTER SET utf8 DEFAULT NULL,
  `image` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `banner_image` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `all_image` text CHARACTER SET utf8 DEFAULT NULL,
  `alt_tag` text CHARACTER SET utf8 DEFAULT NULL,
  `videolink` text CHARACTER SET utf8 DEFAULT NULL,
  `facebook` text CHARACTER SET utf8 DEFAULT NULL,
  `twitter` text CHARACTER SET utf8 DEFAULT NULL,
  `pinterest` text CHARACTER SET utf8 DEFAULT NULL,
  `title_tag` text CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` text CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` text CHARACTER SET utf8 DEFAULT NULL,
  `canonical` text CHARACTER SET utf8 DEFAULT NULL,
  `url` text CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `order_by` int(11) NOT NULL DEFAULT 0,
  `date` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `press_status` enum('preview','publish') NOT NULL,
  `press_attr` longtext DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `press_media_category`
--

CREATE TABLE `press_media_category` (
  `press_cat_id` int(11) NOT NULL,
  `press_cat_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `name` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `description` text CHARACTER SET utf8 DEFAULT NULL,
  `image` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `logo` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `alt_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `videolink` text CHARACTER SET utf8 DEFAULT NULL,
  `title_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `canonical` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `url` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `order_by` int(11) NOT NULL DEFAULT 0,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `press_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `press_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `protect`
--

CREATE TABLE `protect` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `protect_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `protect_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `redirect_url`
--

CREATE TABLE `redirect_url` (
  `redirect_id` int(100) NOT NULL,
  `redirect_key` varchar(255) DEFAULT NULL,
  `site_id` int(50) NOT NULL,
  `org_id` int(50) NOT NULL,
  `page_name` varchar(255) DEFAULT NULL,
  `page_type` varchar(100) DEFAULT NULL,
  `oldrouteurl` varchar(255) DEFAULT NULL,
  `old_url` text DEFAULT NULL,
  `current_url` text DEFAULT NULL,
  `port` varchar(50) DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `redirect_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `redirect_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `result_inner`
--

CREATE TABLE `result_inner` (
  `res_inn_id` int(11) NOT NULL,
  `result_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `result_cat_id` int(11) DEFAULT NULL,
  `result_service_id` int(11) DEFAULT NULL,
  `service_id` int(11) DEFAULT NULL,
  `name` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `image_type` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `beforeimg` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `afterimg` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `alt_img` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `order_by` int(11) NOT NULL DEFAULT 0,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `result_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `result_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `result_service`
--

CREATE TABLE `result_service` (
  `res_ser_id` int(11) NOT NULL,
  `result_key` varchar(225) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `category_type` varchar(100) DEFAULT NULL,
  `design_type` varchar(100) DEFAULT NULL,
  `result_cat_id` int(11) DEFAULT NULL,
  `service_id` varchar(100) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `banner_image` varchar(255) DEFAULT NULL,
  `video_type` varchar(100) DEFAULT NULL,
  `video_link` varchar(255) DEFAULT NULL,
  `alt_tag` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `title_tag` text DEFAULT NULL,
  `keyword_tag` text DEFAULT NULL,
  `description_tag` text DEFAULT NULL,
  `canonical_tag` text DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `order_by` int(11) NOT NULL DEFAULT 0,
  `status` enum('active','inactive') NOT NULL,
  `result_status` enum('preview','publish') NOT NULL,
  `result_attr` longtext DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `seo_page`
--

CREATE TABLE `seo_page` (
  `seo_id` int(11) NOT NULL,
  `seo_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `seo_type` varchar(255) DEFAULT NULL,
  `page_name` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `title_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `canonical_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `site_name` varchar(255) DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `seo_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `seo_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `ser_id` int(11) NOT NULL,
  `ser_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `banner_show` varchar(255) DEFAULT NULL,
  `show_type` varchar(100) DEFAULT NULL,
  `category_type` varchar(50) DEFAULT NULL,
  `category_section` enum('all','service','result','video') NOT NULL,
  `design_type` enum('left','right') DEFAULT NULL,
  `video_type` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `service_cat_id` int(11) DEFAULT NULL,
  `service_type` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `service_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `service_image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `service_banner_image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `home_banner_image` varchar(255) DEFAULT NULL,
  `video_link` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `alt_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description` text CHARACTER SET utf8 DEFAULT NULL,
  `homedescription` text DEFAULT NULL,
  `short_desc` text CHARACTER SET utf8 DEFAULT NULL,
  `section` longtext DEFAULT NULL,
  `title_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `canonical_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `url` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `ser_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `ser_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `order_by` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `service_faq`
--

CREATE TABLE `service_faq` (
  `ser_faq_id` int(11) NOT NULL,
  `ser_faq_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `service_cat_id` int(11) DEFAULT NULL,
  `service_id` int(11) NOT NULL,
  `service_type` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `question` text CHARACTER SET utf8 DEFAULT NULL,
  `answer` text CHARACTER SET utf8 DEFAULT NULL,
  `order_by` int(11) NOT NULL DEFAULT 0,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `ser_faq_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `ser_faq_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `sitemap`
--

CREATE TABLE `sitemap` (
  `sitemap_id` int(100) NOT NULL,
  `sitemap_key` varchar(255) DEFAULT NULL,
  `site_id` int(50) NOT NULL,
  `org_id` int(50) NOT NULL,
  `sitemapxml` longtext CHARACTER SET utf8 DEFAULT NULL,
  `sitemaphtml` longtext CHARACTER SET utf8 DEFAULT NULL,
  `robots` text CHARACTER SET utf8 DEFAULT NULL,
  `port` varchar(50) DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `sitemap_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `sitemap_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE `slider` (
  `slider_id` int(11) NOT NULL,
  `slider_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `alt_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description` text DEFAULT NULL,
  `button_type` enum('No','Yes') NOT NULL,
  `button_name` varchar(255) DEFAULT NULL,
  `button_url` varchar(255) DEFAULT NULL,
  `button_style` text DEFAULT NULL,
  `title_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `url` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `slider_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `slider_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `order_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `social_detail`
--

CREATE TABLE `social_detail` (
  `social_id` int(11) NOT NULL,
  `social_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `icon` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `link` text CHARACTER SET utf8 DEFAULT NULL,
  `title_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` text CHARACTER SET utf8 DEFAULT NULL,
  `canonical_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `social_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `social_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `technology`
--

CREATE TABLE `technology` (
  `tech_id` int(11) NOT NULL,
  `tech_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `banner_image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `alt_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `short_desc` text CHARACTER SET utf8 DEFAULT NULL,
  `description` text CHARACTER SET utf8 DEFAULT NULL,
  `title_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `canonical` text CHARACTER SET utf8 DEFAULT NULL,
  `url` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `order_by` int(11) NOT NULL DEFAULT 0,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `tech_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `tech_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `testimonial`
--

CREATE TABLE `testimonial` (
  `test_id` int(11) NOT NULL,
  `test_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `test_show_type` enum('inside','outside') NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `short_name` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `designation` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `source` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description` text CHARACTER SET utf8 DEFAULT NULL,
  `testimonial_image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `alt_image_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `rating` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `opinions` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `title_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `keyword_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description_tag` text CHARACTER SET utf8 DEFAULT NULL,
  `canonical_tag` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `test_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `test_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `testimonial_video`
--

CREATE TABLE `testimonial_video` (
  `test_video_id` int(11) NOT NULL,
  `video_cat_id` int(11) DEFAULT NULL,
  `video_service_id` int(11) DEFAULT NULL,
  `show_type` varchar(100) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `video_play_id` varchar(255) DEFAULT NULL,
  `alt_img` varchar(100) DEFAULT NULL,
  `status` enum('active','inactive') NOT NULL,
  `order_by` int(11) NOT NULL DEFAULT 0,
  `created_by` varchar(100) DEFAULT NULL,
  `updated_by` varchar(100) DEFAULT NULL,
  `deleted_by` varchar(100) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `usr_id` int(10) UNSIGNED NOT NULL,
  `usr_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_verified_at` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `user_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `user_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `video_inner`
--

CREATE TABLE `video_inner` (
  `vid_inn_id` int(11) NOT NULL,
  `vid_inn_key` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `video_cat_id` int(11) DEFAULT NULL,
  `video_service_id` int(11) DEFAULT NULL,
  `service_id` int(11) DEFAULT NULL,
  `show_type` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `video` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `alt_img` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `order_by` int(11) NOT NULL DEFAULT 0,
  `status` enum('active','inactive') CHARACTER SET utf8 NOT NULL,
  `vid_inn_status` enum('preview','publish') CHARACTER SET utf8 NOT NULL,
  `vid_inn_attr` longtext CHARACTER SET utf8 DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `video_service`
--

CREATE TABLE `video_service` (
  `vid_ser_id` int(11) NOT NULL,
  `vid_ser_key` varchar(225) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `category_type` varchar(100) DEFAULT NULL,
  `design_type` varchar(100) DEFAULT NULL,
  `video_cat_id` int(11) DEFAULT NULL,
  `service_id` varchar(100) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `banner_image` varchar(255) DEFAULT NULL,
  `video_type` varchar(100) DEFAULT NULL,
  `video_link` varchar(255) DEFAULT NULL,
  `alt_tag` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `title_tag` text DEFAULT NULL,
  `keyword_tag` text DEFAULT NULL,
  `description_tag` text DEFAULT NULL,
  `canonical_tag` text DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `order_by` int(11) NOT NULL DEFAULT 0,
  `status` enum('active','inactive') NOT NULL,
  `vid_ser_status` enum('preview','publish') NOT NULL,
  `vid_ser_attr` longtext DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`abt_id`);

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`app_id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`blg_id`);

--
-- Indexes for table `blog_comment`
--
ALTER TABLE `blog_comment`
  ADD PRIMARY KEY (`blg_comm_id`);

--
-- Indexes for table `blog_like`
--
ALTER TABLE `blog_like`
  ADD PRIMARY KEY (`blg_lik_id`);

--
-- Indexes for table `case_studies`
--
ALTER TABLE `case_studies`
  ADD PRIMARY KEY (`case_id`);

--
-- Indexes for table `cfg_mnu_operations`
--
ALTER TABLE `cfg_mnu_operations`
  ADD PRIMARY KEY (`mnu_oper_id`);

--
-- Indexes for table `cfg_plan_config`
--
ALTER TABLE `cfg_plan_config`
  ADD PRIMARY KEY (`clc_id`);

--
-- Indexes for table `cfg_role_menu`
--
ALTER TABLE `cfg_role_menu`
  ADD PRIMARY KEY (`cfgmnu_id`);

--
-- Indexes for table `cfg_role_operations`
--
ALTER TABLE `cfg_role_operations`
  ADD PRIMARY KEY (`oper_id`);

--
-- Indexes for table `cfg_usr_role`
--
ALTER TABLE `cfg_usr_role`
  ADD PRIMARY KEY (`usr_role_id`);

--
-- Indexes for table `concern`
--
ALTER TABLE `concern`
  ADD PRIMARY KEY (`con_id`);

--
-- Indexes for table `contact_detail`
--
ALTER TABLE `contact_detail`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`contactus_id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`doc_id`);

--
-- Indexes for table `doctor_certificate`
--
ALTER TABLE `doctor_certificate`
  ADD PRIMARY KEY (`certificate_id`);

--
-- Indexes for table `doctor_list`
--
ALTER TABLE `doctor_list`
  ADD PRIMARY KEY (`doc_lit_id`);

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`faq_id`);

--
-- Indexes for table `footer`
--
ALTER TABLE `footer`
  ADD PRIMARY KEY (`footer_id`);

--
-- Indexes for table `front_menu`
--
ALTER TABLE `front_menu`
  ADD PRIMARY KEY (`mnu_id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`gallery_id`);

--
-- Indexes for table `gallery_category`
--
ALTER TABLE `gallery_category`
  ADD PRIMARY KEY (`gallery_cat_id`);

--
-- Indexes for table `getaquotes`
--
ALTER TABLE `getaquotes`
  ADD PRIMARY KEY (`quotes_id`);

--
-- Indexes for table `google_recaptcha`
--
ALTER TABLE `google_recaptcha`
  ADD PRIMARY KEY (`google_id`);

--
-- Indexes for table `home_picture`
--
ALTER TABLE `home_picture`
  ADD PRIMARY KEY (`hom_pic_id`);

--
-- Indexes for table `home_technology`
--
ALTER TABLE `home_technology`
  ADD PRIMARY KEY (`hom_tec_id`);

--
-- Indexes for table `master_actions`
--
ALTER TABLE `master_actions`
  ADD PRIMARY KEY (`act_id`);

--
-- Indexes for table `master_menu`
--
ALTER TABLE `master_menu`
  ADD PRIMARY KEY (`mnu_id`);

--
-- Indexes for table `master_operations`
--
ALTER TABLE `master_operations`
  ADD PRIMARY KEY (`op_id`);

--
-- Indexes for table `master_plan`
--
ALTER TABLE `master_plan`
  ADD PRIMARY KEY (`plan_id`);

--
-- Indexes for table `master_role`
--
ALTER TABLE `master_role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `master_users`
--
ALTER TABLE `master_users`
  ADD PRIMARY KEY (`usr_id`),
  ADD UNIQUE KEY `usr_email` (`usr_email`);

--
-- Indexes for table `membership`
--
ALTER TABLE `membership`
  ADD PRIMARY KEY (`mem_id`);

--
-- Indexes for table `notification_type`
--
ALTER TABLE `notification_type`
  ADD PRIMARY KEY (`not_id`);

--
-- Indexes for table `ourservice`
--
ALTER TABLE `ourservice`
  ADD PRIMARY KEY (`our_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`(191));

--
-- Indexes for table `press_media`
--
ALTER TABLE `press_media`
  ADD PRIMARY KEY (`press_id`);

--
-- Indexes for table `press_media_category`
--
ALTER TABLE `press_media_category`
  ADD PRIMARY KEY (`press_cat_id`);

--
-- Indexes for table `protect`
--
ALTER TABLE `protect`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `redirect_url`
--
ALTER TABLE `redirect_url`
  ADD PRIMARY KEY (`redirect_id`);

--
-- Indexes for table `result_inner`
--
ALTER TABLE `result_inner`
  ADD PRIMARY KEY (`res_inn_id`) USING BTREE;

--
-- Indexes for table `result_service`
--
ALTER TABLE `result_service`
  ADD PRIMARY KEY (`res_ser_id`);

--
-- Indexes for table `seo_page`
--
ALTER TABLE `seo_page`
  ADD PRIMARY KEY (`seo_id`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`ser_id`);

--
-- Indexes for table `service_faq`
--
ALTER TABLE `service_faq`
  ADD PRIMARY KEY (`ser_faq_id`);

--
-- Indexes for table `sitemap`
--
ALTER TABLE `sitemap`
  ADD PRIMARY KEY (`sitemap_id`);

--
-- Indexes for table `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`slider_id`);

--
-- Indexes for table `social_detail`
--
ALTER TABLE `social_detail`
  ADD PRIMARY KEY (`social_id`);

--
-- Indexes for table `technology`
--
ALTER TABLE `technology`
  ADD PRIMARY KEY (`tech_id`);

--
-- Indexes for table `testimonial`
--
ALTER TABLE `testimonial`
  ADD PRIMARY KEY (`test_id`);

--
-- Indexes for table `testimonial_video`
--
ALTER TABLE `testimonial_video`
  ADD PRIMARY KEY (`test_video_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`usr_id`);

--
-- Indexes for table `video_inner`
--
ALTER TABLE `video_inner`
  ADD PRIMARY KEY (`vid_inn_id`);

--
-- Indexes for table `video_service`
--
ALTER TABLE `video_service`
  ADD PRIMARY KEY (`vid_ser_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `abt_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `app_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `blg_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_comment`
--
ALTER TABLE `blog_comment`
  MODIFY `blg_comm_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_like`
--
ALTER TABLE `blog_like`
  MODIFY `blg_lik_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `case_studies`
--
ALTER TABLE `case_studies`
  MODIFY `case_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cfg_mnu_operations`
--
ALTER TABLE `cfg_mnu_operations`
  MODIFY `mnu_oper_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `cfg_plan_config`
--
ALTER TABLE `cfg_plan_config`
  MODIFY `clc_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `cfg_role_menu`
--
ALTER TABLE `cfg_role_menu`
  MODIFY `cfgmnu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `cfg_role_operations`
--
ALTER TABLE `cfg_role_operations`
  MODIFY `oper_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `cfg_usr_role`
--
ALTER TABLE `cfg_usr_role`
  MODIFY `usr_role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `concern`
--
ALTER TABLE `concern`
  MODIFY `con_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contact_detail`
--
ALTER TABLE `contact_detail`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `contactus_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=240;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `doc_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctor_certificate`
--
ALTER TABLE `doctor_certificate`
  MODIFY `certificate_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctor_list`
--
ALTER TABLE `doctor_list`
  MODIFY `doc_lit_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faq`
--
ALTER TABLE `faq`
  MODIFY `faq_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `footer`
--
ALTER TABLE `footer`
  MODIFY `footer_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `front_menu`
--
ALTER TABLE `front_menu`
  MODIFY `mnu_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `gallery_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gallery_category`
--
ALTER TABLE `gallery_category`
  MODIFY `gallery_cat_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `getaquotes`
--
ALTER TABLE `getaquotes`
  MODIFY `quotes_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `google_recaptcha`
--
ALTER TABLE `google_recaptcha`
  MODIFY `google_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `home_picture`
--
ALTER TABLE `home_picture`
  MODIFY `hom_pic_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `home_technology`
--
ALTER TABLE `home_technology`
  MODIFY `hom_tec_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `master_actions`
--
ALTER TABLE `master_actions`
  MODIFY `act_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `master_menu`
--
ALTER TABLE `master_menu`
  MODIFY `mnu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `master_operations`
--
ALTER TABLE `master_operations`
  MODIFY `op_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `master_plan`
--
ALTER TABLE `master_plan`
  MODIFY `plan_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `master_role`
--
ALTER TABLE `master_role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `master_users`
--
ALTER TABLE `master_users`
  MODIFY `usr_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `membership`
--
ALTER TABLE `membership`
  MODIFY `mem_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notification_type`
--
ALTER TABLE `notification_type`
  MODIFY `not_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ourservice`
--
ALTER TABLE `ourservice`
  MODIFY `our_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `press_media`
--
ALTER TABLE `press_media`
  MODIFY `press_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `press_media_category`
--
ALTER TABLE `press_media_category`
  MODIFY `press_cat_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `redirect_url`
--
ALTER TABLE `redirect_url`
  MODIFY `redirect_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `result_inner`
--
ALTER TABLE `result_inner`
  MODIFY `res_inn_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `result_service`
--
ALTER TABLE `result_service`
  MODIFY `res_ser_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seo_page`
--
ALTER TABLE `seo_page`
  MODIFY `seo_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `ser_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `service_faq`
--
ALTER TABLE `service_faq`
  MODIFY `ser_faq_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sitemap`
--
ALTER TABLE `sitemap`
  MODIFY `sitemap_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `slider_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `social_detail`
--
ALTER TABLE `social_detail`
  MODIFY `social_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `technology`
--
ALTER TABLE `technology`
  MODIFY `tech_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `testimonial`
--
ALTER TABLE `testimonial`
  MODIFY `test_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `testimonial_video`
--
ALTER TABLE `testimonial_video`
  MODIFY `test_video_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `usr_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `video_inner`
--
ALTER TABLE `video_inner`
  MODIFY `vid_inn_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `video_service`
--
ALTER TABLE `video_service`
  MODIFY `vid_ser_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
