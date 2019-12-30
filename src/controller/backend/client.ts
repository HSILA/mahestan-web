import {call} from "./caller";
import {coursesEndpoint, enrollCourseEndpoint, studentEnrolledCoursesEndpoint} from "./endpoints";

export function findCourses(setCourses: Function, faculty: string, department: string, number: string, group: string, size: number, page: number) {
    const queryParameters = [];
    if (faculty) queryParameters.push(`faculty=${faculty}`);
    if (department) queryParameters.push(`department=${department}`);
    if (number) queryParameters.push(`number=${department}`);
    if (group) queryParameters.push(`group=${department}`);
    if (size) queryParameters.push(`size=${size}`);
    if (page) queryParameters.push(`page=${page}`);
    call(coursesEndpoint, null, queryParameters.join("&"), null, setCourses);
}

export function findEnrolledCourses(setCourses: Function) {
    call(studentEnrolledCoursesEndpoint, getStudentIdPathVariable(), null, null, setCourses);
}

export function enrollCourses(callback: Function, courseIds: string[]) {
    call(enrollCourseEndpoint, getStudentIdPathVariable(), null, courseIds, callback);
}

function getStudentIdPathVariable() {
    // let pathVariables = null;
    // const currentUser = getCurrentUser();
    // if (currentUser !== null) pathVariables = {"student-id": currentUser.id};
    // return pathVariables;
    return {"student-id": "952013038"};
}
