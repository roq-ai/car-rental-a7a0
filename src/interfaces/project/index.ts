import { TaskInterface } from 'interfaces/task';
import { UserProjectInterface } from 'interfaces/user-project';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  title: string;
  description?: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  user_project?: UserProjectInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    task?: number;
    user_project?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  user_id?: string;
  organization_id?: string;
}
