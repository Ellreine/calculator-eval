import styles from './App.module.css';
import React, { useState } from 'react';

export const App = () => {
	// Переменные и хуки
	const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '/'];
	const [textConsole, setTextConsole] = useState('');
	const [colorResult, setColorTesult] = useState(false);

	// ------------- Просшулка кликов -------------
	// На символы и цифры
	const handleClick = (value) => {
		setColorTesult(false);
		setTextConsole((prev) => prev + value);
	};

	// На знак "="
	const calculateResult = () => {
		try {
			const result = eval(textConsole); // спасибо за совет про eval :D
			setColorTesult(true);
			setTextConsole(result.toString());
		} catch (error) {
			setTextConsole('Error');
		}
	};

	// На кнопку Clear
	const clearTextConsole = () => {
		setTextConsole('');
		setColorTesult(false);
	};

	// Верстка
	return (
		<div className={styles.main}>
			<div className={styles.calculator}>
				<input
					type="text"
					value={textConsole}
					readOnly
					className={`${styles.calculator__input} ${
						colorResult ? styles.calculator__inputResult : styles.calculator__inputUsual
					}`}
				/>
				<div className={styles.calculator__buttons}>
					{buttons.map((value) => (
						<button
							key={value}
							onClick={() => handleClick(value)}
							className={styles.calculator__button}
						>
							{value}
						</button>
					))}
					<button
						onClick={calculateResult}
						className={`${styles.calculator__button} ${styles.calculator__buttonEquals}`}
					>
						=
					</button>
				</div>
				<div>
					<button
						onClick={clearTextConsole}
						className={`${styles.calculator__button}  ${styles.calculator__buttonClear}`}
					>
						Clear
					</button>
				</div>
			</div>
		</div>
	);
};
