console.log("📌 AVERAGE GRADE BY COURSE (Highest → Lowest)");
  getCourseAverages(students).forEach(c => {
    console.log(   ${c.course}: ${c.averageGrade}%);
  });
  console.log("");

  console.log("📌 STUDENTS GROUPED BY COURSE");
  const groups = groupByCourse(students);
  Object.entries(groups).forEach(([course, list]) => {
    console.log(\n   [${course}] — ${list.length} student(s));
    list.forEach(s => console.log(      • ${s.name} (Yr${s.year}) | Avg: ${getAverageGrade(s)}%));
  });
  console.log("");

  console.log("📌 STUDENT SEARCH EXAMPLE");
  const found = findStudent(students, "lucia navarro");
  console.log(found
    ?    Found: ${found.name} — ${found.course} | Avg: ${getAverageGrade(found)}%
    : "   No matching student found.");

  const notFound = findStudent(students, "noname person");
  console.log(notFound
    ?    Found: ${notFound.name}
    : "   Search for 'noname person': No match ✅\n");

  console.log("📌 STRETCH — FILTER BY YEAR 3");
  filterByYear(students, 3).forEach(s => console.log(   • ${s.name}));
  console.log("");

  console.log("📌 STRETCH — ALL STUDENTS SORTED ALPHABETICALLY");
  sortByName(students).forEach(s => console.log(   • ${s.name}));

  console.log("\n" + "=".repeat(55));
  console.log("              ✅ REPORT COMPLETE");
  console.log("=".repeat(55));
}

main();
