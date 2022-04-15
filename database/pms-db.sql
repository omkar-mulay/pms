-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: pms
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `clientid` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `contactno` varchar(45) NOT NULL,
  `regtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `loginid` int DEFAULT NULL,
  PRIMARY KEY (`clientid`),
  KEY `loginid_idx` (`loginid`),
  CONSTRAINT `loginid` FOREIGN KEY (`loginid`) REFERENCES `login` (`loginid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (1,'rushikesh','khot','rk@gmail.com','5432122354','2022-01-01 00:00:00',4);
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `empid` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `contactno` varchar(45) DEFAULT NULL,
  `loginid` int NOT NULL,
  `regtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`empid`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `contactno_UNIQUE` (`contactno`),
  KEY `loginid_idx` (`loginid`),
  CONSTRAINT `emploginid` FOREIGN KEY (`loginid`) REFERENCES `login` (`loginid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'somprakash','hase','sh@gmail.com','346454721',3,'2022-04-01 16:57:17'),(2,'omkar','mulay','omkar@gmail.com','0990909099',1,'2022-04-01 16:57:17'),(3,'avanti','sakharkar','as@gmail.com','96474698879',2,'2022-04-01 16:57:17'),(11,'Ramesh','Patil','ramesh@gmail.com','2324567889',17,'2022-04-15 13:04:28'),(12,'Pooja','Pawar','pooja@gmail.com','5467876467',18,'2022-04-15 13:05:23');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `loginid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(15) NOT NULL,
  `role` varchar(20) NOT NULL,
  PRIMARY KEY (`loginid`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'omkarmule','mulay','admin'),(2,'avantisakharkar','avanti','manager'),(3,'somprakashhase','somprakash','employee'),(4,'rushikeshkhot','rushikesh','client'),(17,'rameshpatil','ramesh','employee'),(18,'poojapawar','pooja','employee');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `projectid` int NOT NULL AUTO_INCREMENT,
  `managerid` int NOT NULL,
  `projectname` varchar(45) NOT NULL,
  `project_desc` varchar(250) NOT NULL,
  `startdate` date NOT NULL,
  `enddate` date DEFAULT NULL,
  `clientid` int DEFAULT NULL,
  PRIMARY KEY (`projectid`),
  KEY `managerid_idx` (`managerid`),
  KEY `clientid_idx` (`clientid`),
  CONSTRAINT `clientid` FOREIGN KEY (`clientid`) REFERENCES `client` (`clientid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `managerid` FOREIGN KEY (`managerid`) REFERENCES `employee` (`empid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (17,3,'Bank application','A banking application for transaction','2022-04-15','2022-05-07',1),(18,3,'Shopping app','A shopping application for apparels','2022-04-11','2022-05-12',1);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projectrole`
--

DROP TABLE IF EXISTS `projectrole`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projectrole` (
  `roleid` int NOT NULL AUTO_INCREMENT,
  `rolename` varchar(45) NOT NULL,
  PRIMARY KEY (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projectrole`
--

LOCK TABLES `projectrole` WRITE;
/*!40000 ALTER TABLE `projectrole` DISABLE KEYS */;
INSERT INTO `projectrole` VALUES (1,'developer'),(2,'tester'),(3,'systemenginner'),(4,'teamlead');
/*!40000 ALTER TABLE `projectrole` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task` (
  `taskid` int NOT NULL AUTO_INCREMENT,
  `task_name` varchar(45) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `projectid` int DEFAULT NULL,
  `status` varchar(15) DEFAULT NULL,
  `description` varchar(128) DEFAULT NULL,
  `priority` varchar(15) DEFAULT NULL,
  `teammember_id` int DEFAULT NULL,
  PRIMARY KEY (`taskid`),
  KEY `task_projectid_idx` (`projectid`),
  KEY `teammember_id_idx` (`teammember_id`),
  CONSTRAINT `task_projectid` FOREIGN KEY (`projectid`) REFERENCES `project` (`projectid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `teammember_id` FOREIGN KEY (`teammember_id`) REFERENCES `teammember` (`teammember_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
INSERT INTO `task` VALUES (17,'Login page','2022-04-15','2022-04-22',17,'Complete','Create login page','high',1),(18,'Home page','2022-04-15','2022-04-21',17,'In Progress','Create a Home page','medium',1),(19,'Login page','2022-04-12','2022-04-19',18,'In Progress','Create login page for shopping app','low',2),(20,'Payment gateway','2022-04-14','2022-04-28',18,'In Progress','Create payment gateway','high',2),(21,'About page','2022-04-21','2022-04-27',17,'To do','Create about page','low',1);
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teammember`
--

DROP TABLE IF EXISTS `teammember`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teammember` (
  `teammember_id` int NOT NULL AUTO_INCREMENT,
  `empid` int NOT NULL,
  `roleid` int NOT NULL,
  `projectid` int NOT NULL,
  PRIMARY KEY (`teammember_id`),
  KEY `empid_idx` (`empid`),
  KEY `projectid_idx` (`projectid`),
  KEY `roleid_idx` (`roleid`),
  CONSTRAINT `empid` FOREIGN KEY (`empid`) REFERENCES `employee` (`empid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `projectid` FOREIGN KEY (`projectid`) REFERENCES `project` (`projectid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `roleid` FOREIGN KEY (`roleid`) REFERENCES `projectrole` (`roleid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teammember`
--

LOCK TABLES `teammember` WRITE;
/*!40000 ALTER TABLE `teammember` DISABLE KEYS */;
INSERT INTO `teammember` VALUES (1,1,1,17),(2,11,2,18);
/*!40000 ALTER TABLE `teammember` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-15 22:02:05
