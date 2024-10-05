type IdPpParams = {
  fullname: string;
  idNumber: string;
  dateLost: string;
};

type IdItem = IdPpParams & { id: string };
