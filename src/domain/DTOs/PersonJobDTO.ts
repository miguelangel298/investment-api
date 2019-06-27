import PersonDTO from './PersonDTO';
import BranchOfficeDTO from './BranchOfficeDTO';
import UserDTO from './UserDTO';
import PersonJobEntity from '../../data/entities/PersonJobEntity';

export default class PersonJobDTO {

  id: number;
  position: string;
  salary: number;
  dateAdmission: Date;
  employeeCode: string;
  supervisorName: string;
  supervisorPhone: string;
  currentJob: boolean;
  person: PersonDTO;
  branchOffice: BranchOfficeDTO;
  createdBy: UserDTO;
  updatedBy: UserDTO;
  createdAt: Date;
  updatedAt: Date;

  constructor(personJobEntity: PersonJobEntity) {
    this.id = personJobEntity.id;
    this.position = personJobEntity.position;
    this.salary = personJobEntity.salary;
    this.dateAdmission = personJobEntity.dateAdmission;
    this.employeeCode = personJobEntity.employeeCode;
    this.supervisorName = personJobEntity.supervisorName;
    this.supervisorPhone = personJobEntity.supervisorPhone;
    this.currentJob = personJobEntity.currentJob;
    this.person = new PersonDTO(personJobEntity.person);
    this.branchOffice = new BranchOfficeDTO(personJobEntity.branchOffice);
    this.createdBy = new UserDTO(personJobEntity.createdBy);
    this.createdAt = personJobEntity.createdAt;

    if (personJobEntity.updatedBy) {
      this.updatedBy = new UserDTO(personJobEntity.updatedBy);
      this.updatedAt = personJobEntity.updatedAt;
    }
  }
}
