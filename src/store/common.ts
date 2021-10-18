import AuthService from "../service/auth_service";
import DbConnection from "../service/db_connection";

// App props type
export type AppProps = {
  FileInput: (props: any) => JSX.Element;
  authService: AuthService;
  dbConnection: DbConnection;
};
