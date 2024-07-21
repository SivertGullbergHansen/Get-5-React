import { Card, Flex, Heading } from "@radix-ui/themes";
import React from "react";

export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <Card>
      <Flex direction="column" gap="2" justify="between" align="end">
        <Heading size="3">{label}</Heading>
        <Heading color="gray" size="6">
          {value}
        </Heading>
      </Flex>
    </Card>
  );
}