-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23-Nov-2021 às 20:28
-- Versão do servidor: 10.4.21-MariaDB
-- versão do PHP: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `exercises`
--
CREATE DATABASE IF NOT EXISTS `exercises` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `exercises`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `estados`
--

CREATE TABLE `estados` (
  `estado` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `estados`
--

INSERT INTO `estados` (`estado`) VALUES
('AC'),
('AL'),
('AM'),
('AP'),
('BA'),
('CE'),
('DF'),
('ES'),
('GO'),
('MA'),
('MG'),
('MS'),
('MT'),
('PA'),
('PB'),
('PE'),
('PI'),
('PR'),
('RJ'),
('RN'),
('RO'),
('RR'),
('RS'),
('SC'),
('SE'),
('SP'),
('TO');

-- --------------------------------------------------------

--
-- Estrutura da tabela `partidas`
--

CREATE TABLE `partidas` (
  `data` datetime DEFAULT NULL,
  `time_mandante` varchar(20) DEFAULT NULL,
  `gols_time_mandante` int(11) DEFAULT NULL,
  `time_visitante` varchar(20) DEFAULT NULL,
  `gols_time_visitante` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `partidas`
--

INSERT INTO `partidas` (`data`, `time_mandante`, `gols_time_mandante`, `time_visitante`, `gols_time_visitante`) VALUES
('2021-11-22 17:22:31', 'Santos', 2, 'Corinthians', 0),
('2021-11-22 17:31:15', 'São Paulo', 1, 'Palmeiras', 2),
('2021-11-23 14:15:35', 'Palmeiras', 0, 'Corinthians', 1),
('2021-11-23 16:21:25', NULL, NULL, NULL, NULL),
('2021-11-23 16:21:33', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `times`
--

CREATE TABLE `times` (
  `codigo` int(11) NOT NULL,
  `nome` varchar(20) DEFAULT NULL,
  `estado` varchar(2) DEFAULT NULL,
  `url` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `times`
--

INSERT INTO `times` (`codigo`, `nome`, `estado`, `url`) VALUES
(1, 'Santos', 'SP', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Santos_logo.svg/1200px-Santos_logo.svg.png'),
(2, 'São Paulo', 'SP', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg/1200px-Brasao_do_Sao_Paulo_Futebol_Clube.svg.png'),
(3, 'Corinthians', 'SP', 'https://upload.wikimedia.org/wikipedia/en/5/5a/Sport_Club_Corinthians_Paulista_crest.svg'),
(4, 'Palmeiras', 'SP', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`estado`);

--
-- Índices para tabela `times`
--
ALTER TABLE `times`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `times`
--
ALTER TABLE `times`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
