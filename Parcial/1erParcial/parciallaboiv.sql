-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-10-2019 a las 18:45:25
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `parciallaboiv`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `tipo` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `fechaDeVencimiento` date NOT NULL,
  `precio` int(11) NOT NULL,
  `rutaDeFoto` varchar(500) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `descripcion`, `tipo`, `fechaDeVencimiento`, `precio`, `rutaDeFoto`) VALUES
(1, 'Water - Evian 355 Ml', 'liquido', '2019-06-25', 595, 'http://dummyimage.com/105x287.png/ff4444/ffffff'),
(5, 'Carbonated Water - Blackberry', 'solido', '2019-07-01', 412, 'http://dummyimage.com/159x379.png/cc0000/ffffff'),
(6, 'Tomatoes - Vine Ripe, Red', 'Bousfield', '2018-12-11', 878, 'http://dummyimage.com/141x281.png/ff4444/ffffff'),
(7, 'Cream - 35%', 'Mellings', '2018-12-12', 468, 'http://dummyimage.com/135x333.png/cc0000/ffffff'),
(8, 'Puree - Pear', 'Fullwood', '2019-05-20', 267, 'http://dummyimage.com/236x348.png/5fa2dd/ffffff'),
(9, 'Pear - Asian', 'Brimner', '2018-10-03', 977, 'http://dummyimage.com/153x373.png/cc0000/ffffff'),
(10, 'Pepper - Chilli Seeds Mild', 'Hexam', '2019-06-20', 988, 'http://dummyimage.com/160x318.png/ff4444/ffffff'),
(13, 'asdasd', 'assad', '2019-10-01', 4, 'http://dummyimage.com/153x373.png/cc0000/ffffff'),
(14, 'asdasd', 'solido', '2019-10-01', 3, 'http://dummyimage.com/153x373.png/cc0000/ffffff'),
(15, 'asdasd', 'liquido', '2019-10-01', 4, 'http://dummyimage.com/153x373.png/cc0000/ffffff'),
(16, 'asdasd', 'solido', '2019-10-01', 15, 'http://dummyimage.com/153x373.png/cc0000/ffffff'),
(17, 'Cream - 35%', 'Mellings', '2018-12-12', 468, 'http://dummyimage.com/135x333.png/cc0000/ffffff'),
(18, 'un nuevo producto!', 'solido', '2019-10-01', 150, 'http://dummyimage.com/153x373.png/cc0000/ffffff');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` int(11) NOT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `fechaDeVenta` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id`, `id_producto`, `cantidad`, `fechaDeVenta`) VALUES
(1, 5, NULL, NULL),
(2, 1, 3, '0000-00-00'),
(3, 8, 14, '2022-11-01');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
