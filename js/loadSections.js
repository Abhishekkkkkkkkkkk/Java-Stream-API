async function loadSection(id, file) {
    const response = await fetch(file);
    const data = await response.text();

    document.getElementById(id).innerHTML = data;
}
loadSection("s1", "../sections/section1.html");
loadSection("s2", "../sections/section2.html");
loadSection("s3", "../sections/section3.html");
loadSection("s4", "../sections/section4.html");
loadSection("s5", "../sections/section5.html");
loadSection("s6", "../sections/section6.html");
loadSection("s7", "../sections/section7.html");
loadSection("s8", "../sections/section8.html");
loadSection("s9", "../sections/section9.html");
loadSection("s10", "../sections/section10.html");
loadSection("s11", "../sections/section11.html");
loadSection("s12", "../sections/section12.html");
loadSection("s13", "../sections/section13.html");
loadSection("s14", "../sections/section14.html");
loadSection("s15", "../sections/section15.html");
loadSection("s16", "../sections/section16.html");
loadSection("s17", "../sections/section17.html");
loadSection("s18", "../sections/section18.html");
loadSection("s19", "../sections/section19.html");
loadSection("s20", "../sections/section20.html");