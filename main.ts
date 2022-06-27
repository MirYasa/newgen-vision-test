interface ICourse {
    name: string
    prices: null | number[]
}

let courses: ICourse[] = [
    {name: "Courses in England", prices: [0, 100]},
    {name: "Courses in Germany", prices: [500, null]},
    {name: "Courses in Italy", prices: [100, 200]},
    {name: "Courses in Russia", prices: [null, 400]},
    {name: "Courses in China", prices: [50, 250]},
    {name: "Courses in USA", prices: [200, null]},
    {name: "Courses in Kazakhstan", prices: [56, 324]},
    {name: "Courses in France", prices: [null, null]},
]

let requiredRange1 = [null, 200]
let requiredRange2 = [100, 350]
let requiredRange3 = [200, null]

function filterCourses(courses: ICourse[], [from, to]: null | number[]) {
    const res = new Set()

    for (const course of courses) {
        const [courseFrom, courseTo] = course.prices

        if (!courseFrom && !courseTo) {
            res.add(course)
        }

        if (from === null && to >= courseTo && courseFrom <= to) {
            res.add(course)
        }

        if (to === null && from >= courseFrom && from <= courseFrom) {
            res.add(course)
        }

        if (to !== null && from !== null && from <= courseFrom && to >= courseFrom && to >= courseTo) {
            res.add(course)
        }
    }
    return res
}

console.log(filterCourses(courses, requiredRange1))
console.log(filterCourses(courses, requiredRange2))
console.log(filterCourses(courses, requiredRange3))

function sortCourses(courses: ICourse[]) {
    for (let i = 0; i < courses.length; i++) {
        for (let j = 0; j < i; j++) {
            if (Math.max(...courses[j].prices) > Math.max(...courses[i].prices)) {
                [courses[i], courses[j]] = [courses[j], courses[i]]
            }
        }
    }
    return courses
}

console.log(sortCourses(courses))
