import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [StudentService]
})
export class StudentListComponent implements OnInit {
  students: FirebaseListObservable<any[]>;
  filterByLanguage: string = "allStudents";
  filterByLevel: string = "allStudents";
  filterByTrack: string = "allStudents";
  currentRoute: string = this.router.url;

  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  goToDetailPage(clickedStudent){
    this.router.navigate(['students', clickedStudent.$key]);
  }

  onLanguageChange(optionFromMenu){
    this.filterByLanguage = optionFromMenu;
  }

  onTrackChange(optionFromMenu){
    this.filterByTrack = optionFromMenu;
  }

  onLevelChange(optionFromMenu){
    this.filterByLevel = optionFromMenu;
  }

}
