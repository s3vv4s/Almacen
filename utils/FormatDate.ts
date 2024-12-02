export const FormatDate = (fecha: Date | null | undefined | string): string => {
	if (fecha != null) {
		let ff = fecha.toLocaleString("es-Mx", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			weekday: "short",
		});
		let arr = ff.split(' ');
		if (arr.length == 2) {
			console.log("Del pickert");

			let fecha = arr[1];
			let guiones = fecha.replace(/[/]/g, "-");
			return guiones;
		}
		let fech = ff.split("T");
		if (fetch.length == 2) {
			let fecha = fech[0];
			let reverse = fecha.split("-").reverse();
			let nuevo = reverse.join("-");
      console.log(nuevo);
			return nuevo;
		}

	}
	return "";
};