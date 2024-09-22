'use client';

import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  phoneNumber: z.string().min(2).max(50),
  message: z.string().min(2).max(50),
  radiotype: z.enum(['freight', 'monogram', 'agric'], {
    required_error: 'You need to select a notification type.',
  }),
});
