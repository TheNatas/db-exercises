-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01-Dez-2021 às 17:22
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
-- Estrutura da tabela `jogadores`
--

CREATE TABLE `jogadores` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `codigo_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `jogadores`
--

INSERT INTO `jogadores` (`id`, `nome`, `codigo_time`) VALUES
(1, 'Gabigol', NULL),
(3, 'Arrascaeta', 16),
(6, 'Neymar', 31),
(7, 'Ganso', 31),
(8, 'André', 31),
(9, 'Robinho', 31),
(10, 'Roger Guedes', 32),
(11, 'William', 32),
(12, 'Giuliano', 32);

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
('2021-11-24 14:05:07', 'Santos', 2, 'Corinthians', 1),
('2021-11-24 14:05:15', 'São Paulo', 2, 'Corinthians', 2),
('2021-11-24 14:06:51', 'Palmeiras', 2, 'São Paulo', 0);

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
(4, 'Palmeiras', 'SP', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png'),
(5, 'Grêmio', 'RS', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Gremio-Logo.png'),
(6, 'Internacional', 'RS', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Escudo_do_Sport_Club_Internacional.svg/1200px-Escudo_do_Sport_Club_Internacional.svg.png'),
(10, 'Criciúma', 'SC', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/EscudoCriciumaEC.svg/1200px-EscudoCriciumaEC.svg.png'),
(11, 'RB Bragantino', 'SP', 'http://s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png'),
(12, 'Avaí', 'SC', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Avai_FC_%2805-E%29_-_SC.svg/1200px-Avai_FC_%2805-E%29_-_SC.svg.png'),
(13, 'Athletico', 'PR', 'https://logodownload.org/wp-content/uploads/2018/12/athletico-paranaense-logo-escudo-1.png'),
(14, 'Fluminense', 'RJ', 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a3/FFC_escudo.svg/1200px-FFC_escudo.svg.png'),
(15, 'Atlético', 'MG', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Atletico_mineiro_galo.png/1200px-Atletico_mineiro_galo.png'),
(16, 'Flamengo', 'RJ', 'https://upload.wikimedia.org/wikipedia/commons/9/93/Flamengo-RJ_%28BRA%29.png'),
(31, 'Santos 2010', 'SP', 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2017/03/santos_2010-1.jpg'),
(32, 'Corinthians', 'SP', 'https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `codigo` int(11) NOT NULL,
  `login` text NOT NULL,
  `senha` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`codigo`, `login`, `senha`) VALUES
(1, 'thenatas_', '$2y$10$0BcBPgGmh.AfHDKUIwFze.ZdN9mMvhTJP2TQzLc/t4sRIDXK/6Kym'),
(3, 'admin', '$2y$10$h59iCBt9MwrZarRqQylw4.5mtjpqSNuUXiFhK58XRSyQ/a.ajzS/W'),
(4, 'teste', '$2y$10$N.Q5Z3Fh.66mvSnIwnGyD.PoNgeUhy7dFUMZp1RNcgZlmM6e/eoRG');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`estado`);

--
-- Índices para tabela `jogadores`
--
ALTER TABLE `jogadores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `codigo_time` (`codigo_time`);

--
-- Índices para tabela `times`
--
ALTER TABLE `times`
  ADD PRIMARY KEY (`codigo`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `jogadores`
--
ALTER TABLE `jogadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `times`
--
ALTER TABLE `times`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `jogadores`
--
ALTER TABLE `jogadores`
  ADD CONSTRAINT `jogadores_ibfk_1` FOREIGN KEY (`codigo_time`) REFERENCES `times` (`codigo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
