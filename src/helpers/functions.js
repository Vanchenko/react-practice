import { formatDistanceToNow } from "date-fns";

export function formatTime(data) {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
}