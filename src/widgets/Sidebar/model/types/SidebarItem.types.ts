import { IUser } from 'entities/User';

export interface ISidebarItem {
  path: string
  text: string
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  authOnly?: boolean
}
