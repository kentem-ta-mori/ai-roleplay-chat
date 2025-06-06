export interface CreateCharacterProfileRequest {
    name: string;
    personality: string | null;
    tone: string | null;
    backstory: string | null;
    systemPrompt: string | null;
    exampleDialogue: string | null;
    avatarImageUrl: string | null;
    isActive: boolean;
  }