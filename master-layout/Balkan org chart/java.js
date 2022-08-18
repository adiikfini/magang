OrgChart.templates.mila.field_0 =
	'<text width="800" style="font-size: 15px; font-width:700;" fill="#00000" x="125" y="95" text-anchor="middle" class="field_0">{val}</text>';
var chart = new OrgChart(document.getElementById("tree"), {
	template: "mila",
	layout: OrgChart.tree,
	mouseScrool: OrgChart.none,
	align: OrgChart.ORIENTATION,
	toolbar: {
		layout: true,
		zoom: true,
		fit: true,
		expandAll: true,
	},
	nodeMenu: {
		details: { text: "Details" },
		edit: { text: "Edit" },
		add: { text: "Add" },
		remove: { text: "Remove" },
	},
	nodeBinding: {
		field_0: "name",
		field_1: "title",
		img_0: "img",
	},
});

chart.on("init", function (sender) {
	sender.toolbarUI.showLayout();
});

chart.load([
	{
		id: 1,
		name: "Mochamad Ronny, S.IP., MT",
		title: "Kepala Dinas",
		img: "asset/Struktur organisasi/model1.jpg",
	},
	{
		id: 2,
		pid: 1,
		name: "Dra. Yulia Fitri Mulyani, M.Si",
		title: "Sekretariat Dinas",
		img: "asset/Struktur organisasi/model1.jpg",
	},
	{
		id: 3,
		pid: 1,
		name: "Agustus Fajar S, AKS.,MPSSp.",
		title: "E-Goverment dan Persandian",
		img: "asset/Struktur organisasi/model1.jpg",
	},
	{
		id: 4,
		pid: 1,
		name: "Fithriandy Kurniawan, S.Sos.",
		title: "Informasi Komunikasi Publik dan Statistik",
		img: "asset/Struktur organisasi/model1.jpg",
	},
	{
		id: 5,
		pid: 2,
		name: "Jamila S.STP",
		title: "Sub bagian Umum dan Kepegawain",
		img: "asset/Struktur organisasi/model1.jpg",
	},
	{
		id: 6,
		pid: 2,
		name: "Issabella Cecilia, SE.",
		title: "Sub bagian Program dan Kuangan",
		img: "asset/Struktur organisasi/model1.jpg",
	},
	{
		id: 7,
		pid: 3,
		name: "Deni Prayitno, S.Kom., MT",
		title: "Seksi Persandian dan Sumber Daya",
		img: "asset/Struktur organisasi/model1.jpg",
	},
	{
		id: 8,
		pid: 4,
		name: "Azis Sumaryono, S.Kom., M.Kom.",
		title: "Sesi Data dan Statistik",
		img: "asset/Struktur organisasi/model1.jpg",
	},
]);
