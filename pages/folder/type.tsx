export default interface ProfileId {
  data: UserId[];
}

type UserId = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};
